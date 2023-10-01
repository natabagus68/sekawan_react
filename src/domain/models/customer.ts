import { Entity } from "./_entity";

export interface ICustomer {
  id?: string;
  name: string;
  date: string;
}

export class Customer extends Entity<ICustomer> {
  static create(props: ICustomer): Customer {
    return new Customer(props);
  }
  unmarshall() {
    return {
      id: this.id,
      name: this.name,
      date: this.date,
    };
  }

  get name(): string {
    return this._props.name;
  }
  get date(): string {
    return this._props.date;
  }
}
