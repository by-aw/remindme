import Dexie, { Table } from "dexie";

export interface Reminder {
  id?: number;
  name: string;
  time: string;
  color: string;
  complete: boolean;
}

export class MyDb extends Dexie {
  reminders!: Table<Reminder>;

  constructor() {
    super("myDatabase");
    this.version(1).stores({
      reminders: "++id, name, time, color, complete",
    });
  }
}

export const db = new MyDb();
