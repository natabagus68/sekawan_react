import { Entity } from "./_entity";

export interface ISideChartOverview {
  id?: string;
  solved: number | string;
  recived: number | string;
  AfirstRT: number | string;
  ART: number | string;
  SLA: number | string;
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
  get solved(): number | string {
    return this._props.solved;
  }
  get recived(): number | string {
    return this._props.recived;
  }
  get AfirstRT(): number | string {
    return this._props.AfirstRT;
  }
  get ART(): number | string {
    return this._props.ART;
  }
  get SLA(): number | string {
    return this._props.SLA;
  }
}
