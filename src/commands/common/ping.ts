import { ApplicationCommandType } from "discord.js";

import { Command } from "../../types/command";

export default new Command({
  name: "ping",
  description: "Reply with pong",
  type: ApplicationCommandType.ChatInput,

  async run({ interaction }) {
    interaction.reply({ content: "pong", ephemeral: true });
  },
});
