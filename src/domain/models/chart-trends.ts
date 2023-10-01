import { Entity } from "./_entity";

export interface IChartTrend {
  id?: string;
  date: string;
  count: number;
  label: string;
}

export class ChartTrend extends Entity<IChartTrend> {
  static create(props: IChartTrend): ChartTrend {
    return new ChartTrend(props);
  }

  unmarshall() {
    return {
      id: this.id,
      date: this.date,
      count: this.count,
      label: this.label,
    };
  }
  get date(): string {
    return this._props.date;
  }
  get count(): number {
    return this._props.count;
  }
  get label(): string {
    return this._props.label;
  }
}
