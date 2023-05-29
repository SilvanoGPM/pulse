import { ClientEvents } from 'discord.js';

export type EventType<K extends keyof ClientEvents> = {
  name: K,
  once?: boolean;
  run(...args: ClientEvents[K]): any;
}

export class Event<K extends keyof ClientEvents> {
  constructor(options: EventType<K>) {
    Object.assign(this, options);
  }
}
