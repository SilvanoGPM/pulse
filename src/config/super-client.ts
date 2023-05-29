import {
  Client,
  IntentsBitField,
  BitFieldResolvable,
  GatewayIntentsString,
  Partials,
} from "discord.js";

import dotenv from "dotenv";
export * from 'colors';

dotenv.config();

export class SuperClient extends Client {
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
    this.login(process.env.DISCORD_TOKEN);

    this.on('ready', () => {
      console.log('⚡Bot iniciado com sucesso.'.green);
    });
  }
}
