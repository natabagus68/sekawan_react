import { Overview } from "@domain/models/overview";
import { Task } from "@domain/models/task";
import { OverviewRepository } from "@domain/repositories/overview-repository";
import { api } from "./_api";
import { SideChartOverview } from "@domain/models/side-chart-overview";
import { Prompt } from "@domain/models/prompt";
import { ChartTrend } from "@domain/models/chart-trends";
import { UnresolvedTiket } from "@domain/models/unresolved-ticket";

export class OverviewApiRepository implements OverviewRepository {
  async checklist(id: string, props: Task): Promise<boolean> {
    await api.put("task/" + id, {
      id: id,
      check: props.unmarshall().check,
      task: props.unmarshall().name,
      status: props.unmarshall().type,
      color: props.unmarshall().color,
    });
    return true;
  }
  async get(): Promise<Overview> {
    const { data } = await api.get("overview");
    const { data: tasks } = await api.get("task");
    return Overview.create({
      prompts: data?.prompt?.map((item) => {
        return Prompt.create({
          head: item?.head ?? "",
          value: item?.value ?? "",
        });
      }),
      charts: data?.["chart-data"]?.map((item) => {
        return ChartTrend.create({
          date: item?.label,
          count: item?.data,
          label: item?.label,
        });
      }),
      unresolved: data?.unresolved?.map((item) => {
        return UnresolvedTiket.create({
          name: item?.name ?? "",
          value: item?.count ?? 0,
        });
      }),
      task: tasks?.map((item) => {
        return Task.create({
          id: item.id,
          check: item?.check ?? false,
          name: item?.task ?? "",
          type: item?.status ?? "",
          color: item?.color ?? "",
        });
      }),
      side: SideChartOverview.create({
        solved: data?.side?.solved ?? 0,
        recived: data?.side?.recived ?? 0,
        AfirstRT: data?.side?.AfirstRT ?? 0,
        ART: data?.side?.ART ?? 0,
        SLA: data?.side?.SLA ?? 0,
      }),
    });
  }
  async createTask(props: Task): Promise<Task> {
    await api.post("task", {
      check: props.unmarshall().check,
      task: props.unmarshall().name,
      status: props.unmarshall().type,
      color: props.unmarshall().color,
    });

    return props;
  }
}
