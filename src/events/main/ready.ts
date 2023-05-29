import { Event } from "../../types/event";
import { client } from "../../main";
import { figlet } from '../../services/figlet';

export default new Event({
  name: "ready",
  once: true,

  run() {
    const { commands, buttons, selects, modals } = client;

    figlet({
      text: 'PulseBot',
      font: 'Big',
      spaces: true,
    });

    console.log(` ⬤ Comandos carregados: ${commands.size}`.grey);
    console.log(` ⬤ Botões carregados: ${buttons.size}`.grey);
    console.log(` ⬤ Escolhas carregadas: ${selects.size}`.grey);
    console.log(` ⬤ Modais carregados: ${modals.size}`.grey);
    console.log();
  },
});
