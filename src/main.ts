export * from 'colors';

import { SuperClient } from './config/super-client';
import config from './config/config.json';

export const client = new SuperClient();

client.start();

export { config };
