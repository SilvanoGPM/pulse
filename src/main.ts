export * from 'colors';

import { SuperClient } from './config/super-client';

export const client = new SuperClient();

client.start();

client.on('messageCreate', (message) => {
  const isThisBot = message.author.id === client.user?.id;

  if (isThisBot) {
    return;
  }

  message.reply({ content: `Olá, ${message.author.username}` });
});
