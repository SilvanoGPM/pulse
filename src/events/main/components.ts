import { Event } from "../../types/event";

import { client } from "../../main";

export default new Event({
  name: "interactionCreate",

  run(interaction) {
    if (interaction.isModalSubmit()) {
      const modal = client.modals.get(interaction.customId);

      if (modal) {
        modal(interaction);
      }

      return;
    }

    if (interaction.isButton()) {
      const button = client.buttons.get(interaction.customId);

      if (button) {
        button(interaction);
      }

      return;
    }

    if (interaction.isStringSelectMenu()) {
      const select = client.selects.get(interaction.customId);

      if (select) {
        select(interaction);
      }

      return;
    }
  },
});
