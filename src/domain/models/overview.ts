import { Entity } from "./_entity";
import { ChartTrend } from "./chart-trends";
import { Prompt } from "./prompt";
import { SideChartOverview } from "./side-chart-overview";
import { ITask, Task } from "./task";
import { UnresolvedTiket } from "./unresolved-ticket";

export interface IOverview {
  id?: string;
  prompts: Prompt[];
  charts: ChartTrend[];
  unresolved: UnresolvedTiket[];
  task: Task[];
  side: SideChartOverview;
}

export class Overview extends Entity<IOverview> {
  static create(props: IOverview): Overview {
    return new Overview(props);
  }
  unmarshall() {
    return {
      id: this.id,
      prompts: this.prompts,
      charts: this.charts,
      unresolved: this.unresolved,
      task: this.task,
      side: this.side,
    };
  }
  addTask(props: ITask) {
    this._props.task.push(Task.create({ ...props }));
  }
  get prompts(): Prompt[] {
    return this._props.prompts;
  }
  get charts(): ChartTrend[] {
    return this._props.charts;
  }
  get unresolved(): UnresolvedTiket[] {
    return this._props.unresolved;
  }
  get task(): Task[] {
    return this._props.task;
  }
  get side(): SideChartOverview {
    return this._props.side;
  }
}
