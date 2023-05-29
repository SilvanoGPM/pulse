import { Event } from "../../types/event";
import { client } from "../../main";

export default new Event({
  name: "ready",
  once: true,

  run() {
    const { commands, buttons, selects, modals } = client;

    console.log();
    console.log(`⚡O BOT está online.`.green);
    console.log();

    console.log(` ⬤ Comandos carregados: ${commands.size}`.grey);
    console.log(` ⬤ Botões carregados: ${buttons.size}`.grey);
    console.log(` ⬤ Escolhas carregadas: ${selects.size}`.grey);
    console.log(` ⬤ Modais carregados: ${modals.size}`.grey);
    console.log();
  },
});
