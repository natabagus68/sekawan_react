import { Entity } from "./_entity";

export interface ITIcketDetail {
  id?: string;
  name: string;
  date: string;
  image: string | File;
}

export class TicketDetail extends Entity<ITIcketDetail> {
  static create(props: ITIcketDetail): TicketDetail {
    return new TicketDetail(props);
  }

  unmarshall() {
    return {
      id: this.id,
      name: this.name,
      date: this.date,
      image: this.image,
    };
  }

  get name(): string {
    return this._props.name;
  }
  get date(): string {
    return this._props.date;
  }
  get image(): string | File {
    return this._props.image;
  }
}
