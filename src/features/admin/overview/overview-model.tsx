import { OverviewApiRepository } from "@data/overview-api-repository";
import { Overview } from "@domain/models/overview";
import { SideChartOverview } from "@domain/models/side-chart-overview";
import { Task } from "@domain/models/task";
import { OverviewRepository } from "@domain/repositories/overview-repository";
import { useEffect, useState } from "react";

export const useOverview = () => {
  const overRep: OverviewRepository = new OverviewApiRepository();
  const [task, setTask] = useState(
    Task.create({
      check: false,
      name: "",
      type: "",
      color: "",
    })
  );
  const [overview, setOverview] = useState(
    Overview.create({
      prompts: [],
      charts: [],
      unresolved: [],
      task: [],
      side: SideChartOverview.create({
        solved: 0,
        recived: 0,
        AfirstRT: 0,
        ART: 0,
        SLA: 0,
      }),
    })
  );

  const handelFormTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask((prev) => {
      return Task.create({
        ...prev.unmarshall(),
        name: e.target.value,
      });
    });
  };
  const addTask = async () => {
    if (!!task.name) {
      const taksTemp = Task.create({
        ...task.unmarshall(),
        color: "green-700",
        type: "new",
      });
      setOverview((prev) => {
        return Overview.create({
          ...prev.unmarshall(),
          task: [...prev.task, taksTemp],
        });
      });
      await overRep.createTask(taksTemp);
      setTask(
        Task.create({
          check: false,
          name: "",
          type: "",
          color: "",
        })
      );
    } else return;
  };
  const fetchDataOverview = async () => {
    const res = await overRep.get();
    setOverview(res);
  };

  const checklist = async (id: string) => {
    setOverview((prev) => {
      return Overview.create({
        ...prev.unmarshall(),
        task: prev.task.map((item) => {
          if (id === item.id) {
            return Task.create({
              ...item.unmarshall(),
              check: !item.check,
            });
          } else return item;
        }),
      });
    });

    const data = overview.task.find((item) => item.id == id);
    await overRep.checklist(id, data);
  };

  useEffect(() => {
    fetchDataOverview();
  }, []);
  return {
    task,
    overview,
    handelFormTask,
    addTask,
    checklist,
  };
};
