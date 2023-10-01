import { Entity } from "./_entity";
import { Customer } from "./customer";
import { TicketDetail } from "./ticket-detail";

export interface ITicket {
  id?: string;
  detail: TicketDetail;
  Customer: Customer;
  date: string;
  priority: string;
}

export class Ticket extends Entity<ITicket> {
  static create(props: ITicket): Ticket {
    return new Ticket(props);
  }

  unmarshall() {
    return {
      id: this.id,
      detail: this.detail,
      Customer: this.Customer,
      date: this.date,
      priority: this.priority,
    };
  }

  get detail(): TicketDetail {
    return this._props.detail;
  }
  get Customer(): Customer {
    return this._props.Customer;
  }
  get date(): string {
    return this._props.date;
  }
  get priority(): string {
    return this._props.priority;
  }
}
