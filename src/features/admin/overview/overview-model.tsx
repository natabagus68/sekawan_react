import { Overview } from "@domain/models/overview";
import { SideChartOverview } from "@domain/models/side-chart-overview";
import { Task } from "@domain/models/task";
import { useState } from "react";

export const useOverview = () => {
  const [task, setTask] = useState(
    Task.create({
      check: false,
      name: "",
      type: "",
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

  return {
    overview,
  };
};
