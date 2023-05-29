import {
  CommandInteraction,
  CommandInteractionOptionResolver,
  Collection,
  ButtonInteraction,
  StringSelectMenuInteraction,
  ModalSubmitInteraction,
  ApplicationCommandData
} from "discord.js";

import { SuperClient } from "../config/super-client";

export interface CommandProps {
  client: SuperClient;
  interaction: CommandInteraction;
  options: CommandInteractionOptionResolver;
}

export type ComponentsButton = Collection<
  string,
  (interaction: ButtonInteraction) => any
>;

export type ComponentsSelect = Collection<
  string,
  (interaction: StringSelectMenuInteraction) => any
>;

export type ComponentsModal = Collection<
  string,
  (interaction: ModalSubmitInteraction) => any
>;

export interface CommandComponents {
  buttons?: ComponentsButton;
  selects?: ComponentsSelect;
  modals?: ComponentsModal;
}

export type CommandType = ApplicationCommandData & CommandComponents & {
  run(props: CommandProps): Promise<any>;
};

export class Command {
  constructor(options: CommandType) {
    Object.assign(this, options);
  }
}
