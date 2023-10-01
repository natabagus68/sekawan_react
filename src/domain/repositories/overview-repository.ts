import { Overview } from "@domain/models/overview";
import { Task } from "@domain/models/task";

export interface OverviewRepository {
  get(): Promise<Overview>;
  createTask(props: Task): Promise<Task>;
  checklist(id: string, props: Task): Promise<boolean>;
}
