import { ChartLine } from "@common/components/charts/ChartLine";
import { Prompt } from "@common/components/prompt";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Radio,
  Checkbox,
} from "@material-tailwind/react";
import { Plus } from "lucide-react";
import { useOverview } from "./overview-model";
export const Overview = () => {
  const model = useOverview();
  return (
    <>
      <main className="mb-3">
        <div className="flex items-center justify-between">
          <Prompt head={"Unresolved"} content={"60"} />
          <Prompt head={"Overdue"} content={"16"} />
          <Prompt head={"Open"} content={"43"} />
          <Prompt head={"On hold"} content={"64"} />
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
                datas={[12, 1, 21, 32, 11.1]}
                labels={[1, 2, 3, 4, 5, 6]}
                height={200}
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col">
            <div className="flex-1 flex flex-col items-center justify-center gap-2 border-b border-gray-200">
              <p className="text-[10px] text-gray-400">Resolved</p>
              <p>449</p>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center gap-2 border-b border-gray-200">
              <p className="text-[10px] text-gray-400">Recived</p>
              <p>449</p>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center gap-2 border-b border-gray-200">
              <p className="text-[10px] text-gray-400">
                Avarage first response time
              </p>
              <p>449</p>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center gap-2 border-b border-gray-200">
              <p className="text-[10px] text-gray-400">Avarage respose time</p>
              <p>449</p>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center gap-2 border-b border-gray-200">
              <p className="text-[10px] text-gray-400">Resolution within SLA</p>
              <p>449</p>
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
                  <div className="flex items-center justify-between border-b border-gray-200 py-4 px-3">
                    <Typography
                      variant="h5"
                      className="text-gray-700 text-[16px]"
                    >
                      Waiting on Feature Request
                    </Typography>
                    <p className="text-[16px]">4238</p>
                  </div>
                  <div className="flex items-center justify-between border-b border-gray-200 py-4 px-3">
                    <Typography
                      variant="h5"
                      className="text-gray-700 text-[16px]"
                    >
                      Waiting Customer Response
                    </Typography>
                    <p className="text-[16px]">4238</p>
                  </div>
                  <div className="flex items-center justify-between border-b border-gray-200 py-4 px-3">
                    <Typography
                      variant="h5"
                      className="text-gray-700 text-[16px]"
                    >
                      Waiting Developer Fix
                    </Typography>
                    <p className="text-[16px]">281</p>
                  </div>
                  <div className="flex items-center justify-between border-b border-gray-200 py-4 px-3">
                    <Typography
                      variant="h5"
                      className="text-gray-700 text-[16px]"
                    >
                      Panding
                    </Typography>
                    <p className="text-[16px]">4238</p>
                  </div>
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
                        placeholder="Create new task"
                        type="text"
                        className="flex-1 py-4 px-3 placeholder:text-gray-300 placeholder:font-bold text-[14px] outline-none"
                      />
                    </div>
                    <button className="p-2 bg-gray-400 rounded-lg">
                      <Plus className="w-3 h-3 text-gray-8010" />
                    </button>
                  </div>
                  <div className="flex items-center justify-between border-b border-gray-200 py-1.5 px-3">
                    <div className="flex items-center gap-1">
                      <Checkbox
                        ripple={false}
                        className="h-5 w-5 rounded-full border-gray-900/20 bg-gray-900/10 transition-all hover:scale-105 hover:before:opacity-0"
                      />
                      <Typography
                        variant="h5"
                        className="text-gray-700 text-[16px]"
                      >
                        Finish ticket update
                      </Typography>
                    </div>
                    <Button className="py-1 px-2 bg-yellow-700">urgent</Button>
                  </div>
                  <div className="flex items-center justify-between border-b border-gray-200 py-1.5 px-3">
                    <div className="flex items-center gap-1">
                      <Checkbox
                        ripple={false}
                        className="h-5 w-5 rounded-full border-gray-900/20 bg-gray-900/10 transition-all hover:scale-105 hover:before:opacity-0"
                      />
                      <Typography
                        variant="h5"
                        className="text-gray-700 text-[16px]"
                      >
                        Create new ticket example
                      </Typography>
                    </div>
                    <Button className="py-1 px-2 bg-green-700">new</Button>
                  </div>
                  <div className="flex items-center justify-between border-b border-gray-200 py-1.5 px-3">
                    <div className="flex items-center gap-1">
                      <Checkbox
                        ripple={false}
                        className="h-5 w-5 rounded-full border-gray-900/20 bg-gray-900/10 transition-all hover:scale-105 hover:before:opacity-0"
                      />
                      <Typography
                        variant="h5"
                        className="text-gray-700 text-[16px]"
                      >
                        Update ticket report
                      </Typography>
                    </div>
                    <Button className="py-1 px-2 bg-gray-400 text-gray-600">
                      default
                    </Button>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </main>
    </>
  );
};
