import {
  Client,
  IntentsBitField,
  BitFieldResolvable,
  GatewayIntentsString,
  Partials,
  Collection,
  ApplicationCommandDataResolvable,
  ClientEvents,
} from "discord.js";

import path from "path";
import fs from "fs";

import dotenv from "dotenv";
export * from "colors";

import {
  CommandType,
  ComponentsButton,
  ComponentsModal,
  ComponentsSelect,
} from "../types/command";

import { EventType } from "../types/event";

dotenv.config();

const isJavascriptOrTypescriptFile = (file: string) =>
  file.endsWith(".ts") || file.endsWith(".js");

export class SuperClient extends Client {
  public commands = new Collection<string, CommandType>();
  public buttons: ComponentsButton = new Collection();
  public selects: ComponentsSelect = new Collection();
  public modals: ComponentsModal = new Collection();

  constructor() {
    super({
      intents: Object.keys(IntentsBitField.Flags) as BitFieldResolvable<
        GatewayIntentsString,
        number
      >,

      partials: [
        Partials.Channel,
        Partials.GuildMember,
        Partials.GuildScheduledEvent,
        Partials.Message,
        Partials.Reaction,
        Partials.ThreadMember,
        Partials.User,
      ],
    });
  }

  public start() {
    this.registerModules();
    this.registerEvents();
    this.login(process.env.DISCORD_TOKEN);
  }

  private async registerCommands(commands: ApplicationCommandDataResolvable[]) {
    try {
      await this.application?.commands.set(commands);
      console.log("🤖 Comandos de barra (/) definidos.".green);
    } catch (error) {
      console.log(
        `❌  Erro ao definir comandos de barra (/).\nError: ${error}`.red
      );
    }
  }

  private async registerModules() {
    console.log('⌛ Carregando comandos...'.yellow);

    const slashCommands: ApplicationCommandDataResolvable[] = [];

    const commandsPath = path.join(__dirname, "..", "commands");

    const paths = fs.readdirSync(commandsPath);

    for (const local of paths) {
      const subPaths = fs
        .readdirSync(`${commandsPath}/${local}/`)
        .filter(isJavascriptOrTypescriptFile);

      for (const fileName of subPaths) {
        const command = await this.getCommand(local, fileName);

        const { name, buttons, selects, modals } = command;

        if (name) {
          this.commands.set(name, command);
          slashCommands.push(command);

          if (buttons) {
            buttons.forEach((button, key) => this.buttons.set(key, button));
          }

          if (selects) {
            selects.forEach((select, key) => this.selects.set(key, select));
          }

          if (modals) {
            modals.forEach((modal, key) => this.modals.set(key, modal));
          }
        }
      }
    }

    this.on("ready", () => {
      this.registerCommands(slashCommands);
    });
  }

  private async registerEvents() {
    console.log('⌛ Carregando eventos...'.yellow);

    const eventsPath = path.join(__dirname, "..", "events");

    const paths = fs.readdirSync(eventsPath);

    for (const local of paths) {
      const subPaths = fs
        .readdirSync(`${eventsPath}/${local}/`)
        .filter(isJavascriptOrTypescriptFile);

      for (const fileName of subPaths) {
        const { name, once, run } = await this.getEvent(local, fileName);

        try {
          if (name) {
            once ? this.once(name, run) : this.on(name, run);
          }
        } catch (error) {
          console.log(
            `❌  Erro ocorreu no evento: ${name}.\nError: ${error}`.red
          );
        }
      }
    }
  }

  private async getCommand(local: string, fileName: string) {
    const command = await import(`../commands/${local}/${fileName}`);

    return command.default as CommandType;
  }

  private async getEvent(local: string, fileName: string) {
    const command = await import(`../events/${local}/${fileName}`);

    return command.default as EventType<keyof ClientEvents>;
  }
}
