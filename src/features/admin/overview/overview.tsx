import { ChartLine } from "@common/components/charts/ChartLine";
import { Prompt } from "@common/components/prompt";
import {
  Card,
  CardBody,
  Typography,
  Button,
  Checkbox,
} from "@material-tailwind/react";
import { Plus } from "lucide-react";
import { useOverview } from "./overview-model";
export const Overview = () => {
  const model = useOverview();
  return (
    <>
      <main className="mb-3">
        <div className="flex items-center justify-between gap-5">
          {model.overview?.prompts?.map((item) => {
            return <Prompt head={item?.head} content={item?.value} />;
          })}
        </div>
        <div className="w-full border border-gray-200 rounded-lg bg-white shadow-sm mt-10 flex">
          <div className="w-[70%] border-r border-gray-200 p-4">
            <div>
              <h3 className="font-bold">Today's trends</h3>
              <p className="text-[10px] text-gray-600">
                as of 25 May 2019, 09:41 PM
              </p>
            </div>
            <div className="mt-8">
              <ChartLine
                datas={model.overview.charts.map((item) => item.count)}
                labels={model.overview.charts.map((item) => item.label)}
                height={200}
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col">
            <div className="flex-1 flex flex-col items-center justify-center gap-2 border-b border-gray-200">
              <p className="text-[10px] text-gray-400">Resolved</p>
              <p>{model.overview.side.solved}</p>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center gap-2 border-b border-gray-200">
              <p className="text-[10px] text-gray-400">Recived</p>
              <p>{model.overview.side.recived}</p>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center gap-2 border-b border-gray-200">
              <p className="text-[10px] text-gray-400">
                Avarage first response time
              </p>
              <p>{model.overview.side.AfirstRT}</p>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center gap-2 border-b border-gray-200">
              <p className="text-[10px] text-gray-400">Avarage respose time</p>
              <p>{model.overview.side.ART}</p>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center gap-2 border-b border-gray-200">
              <p className="text-[10px] text-gray-400">Resolution within SLA</p>
              <p>{model.overview.side.SLA}</p>
            </div>
          </div>
        </div>

        <div className="flex gap-5">
          <div className="flex-1">
            <Card className="mt-6 w-full">
              <CardBody className="!px-0">
                <div className="flex justify-between items-center px-3">
                  <Typography variant="h5" className="text-gray-700">
                    Unresolved tickets
                  </Typography>
                  <Typography variant="h6" className="text-indigo-500">
                    View detail
                  </Typography>
                </div>
                <div className="px-3">
                  <Typography className="flex items-center gap-1 text-[12px]">
                    Group:
                    <Typography
                      variant="h6"
                      className="text-gray-700 text-[12px]"
                    >
                      Suport
                    </Typography>
                  </Typography>
                </div>
                <div className="mt-8">
                  {model.overview.unresolved.map((item) => {
                    return (
                      <div className="flex items-center justify-between border-b border-gray-200 py-4 px-3">
                        <Typography
                          variant="h5"
                          className="text-gray-700 text-[16px]"
                        >
                          {item?.name}
                        </Typography>
                        <p className="text-[16px]">{item?.value}</p>
                      </div>
                    );
                  })}
                </div>
              </CardBody>
            </Card>
          </div>
          <div className="flex-1">
            <Card className="mt-6 w-full">
              <CardBody className="!px-0">
                <div className="flex justify-between items-center px-3">
                  <Typography variant="h5" className="text-gray-700">
                    Tasks
                  </Typography>
                  <Typography variant="h6" className="text-indigo-500">
                    View all
                  </Typography>
                </div>
                <div className="px-3">
                  <Typography className="flex items-center gap-1 text-[12px]">
                    Todays
                  </Typography>
                </div>
                <div className="mt-8">
                  <div className="flex items-center justify-between border-b border-gray-200 px-3">
                    <div>
                      <input
                        value={model.task.name}
                        onChange={model.handelFormTask}
                        placeholder="Create new task"
                        type="text"
                        className="flex-1 py-4 px-3 placeholder:text-gray-300 placeholder:font-bold text-[14px] outline-none"
                      />
                    </div>
                    <button
                      onClick={model.addTask}
                      className="p-2 bg-gray-400 rounded-lg"
                    >
                      <Plus className="w-3 h-3 text-gray-8010" />
                    </button>
                  </div>
                  {model.overview.task.map((item) => {
                    return (
                      <div className="flex items-center justify-between border-b border-gray-200 py-1.5 px-3">
                        <div className="flex items-center gap-1">
                          <Checkbox
                            onClick={() => model.checklist(item.id)}
                            ripple={item.check}
                            checked={item.check}
                            className="h-5 w-5 rounded-full border-gray-900/20 bg-gray-900/10 transition-all hover:scale-105 hover:before:opacity-0"
                          />
                          <Typography
                            variant="h5"
                            className="text-gray-700 text-[16px]"
                          >
                            {item.name}
                          </Typography>
                        </div>
                        <Button className={`py-1 px-2 bg-${item?.color}`}>
                          {item?.type}
                        </Button>
                      </div>
                    );
                  })}
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </main>
    </>
  );
};
