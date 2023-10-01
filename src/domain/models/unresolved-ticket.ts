import { Entity } from "./_entity";

export interface IUnresolvedTiket {
  id?: string;
  name: string;
  value: number;
}

export class UnresolvedTiket extends Entity<IUnresolvedTiket> {
  static create(props: IUnresolvedTiket): UnresolvedTiket {
    return new UnresolvedTiket(props);
  }
  unmarshall() {
    return {
      id: this.id,
      name: this.name,
      value: this.value,
    };
  }

  get name(): string {
    return this._props.name;
  }
  get value(): number {
    return this._props.value;
  }
}
