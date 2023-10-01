import { Entity } from "./_entity";

export interface IPrompt {
  id?: string;
  head: string;
  value: number;
}

export class Prompt extends Entity<IPrompt> {
  static create(props: IPrompt): Prompt {
    return new Prompt(props);
  }

  unmarshall() {
    return {
      id: this.id,
      head: this.head,
      value: this.value,
    };
  }

  get head(): string {
    return this._props.head;
  }

  get value(): number {
    return this._props.value;
  }
}
