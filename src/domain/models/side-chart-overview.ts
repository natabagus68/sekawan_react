import { Entity } from "./_entity";

export interface ISideChartOverview {
  id?: string;
  solved: number;
  recived: number;
  AfirstRT: number;
  ART: number;
  SLA: number;
}

export class SideChartOverview extends Entity<ISideChartOverview> {
  static create(props: ISideChartOverview): SideChartOverview {
    return new SideChartOverview(props);
  }

  unmarshall() {
    return {
      id: this.id,
      solved: this.solved,
      recived: this.recived,
      AfirstRT: this.AfirstRT,
      ART: this.ART,
      SLA: this.SLA,
    };
  }
  get solved(): number {
    return this._props.solved;
  }
  get recived(): number {
    return this._props.recived;
  }
  get AfirstRT(): number {
    return this._props.AfirstRT;
  }
  get ART(): number {
    return this._props.ART;
  }
  get SLA(): number {
    return this._props.SLA;
  }
}
