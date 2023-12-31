import { Entity } from "./_entity";

export interface ITask {
  id?: string;
  check: boolean;
  name: string;
  type: string;
  color: string;
}

export class Task extends Entity<ITask> {
  static create(props: ITask): Task {
    return new Task(props);
  }
  unmarshall() {
    return {
      id: this.id,
      check: this.check,
      name: this.name,
      type: this.type,
      color: this.color,
    };
  }

  get check(): boolean {
    return this._props.check;
  }
  get name(): string {
    return this._props.name;
  }

  get type(): string {
    return this._props.type;
  }
  get color(): string {
    return this._props.color;
  }
}
