import {
  Avatar,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronLeft,
  ChevronRight,
  Filter,
  MoreVertical,
  SortAsc,
} from "lucide-react";
{
  /* <td className="text-sm py-2 border-b border-gray-400 text-center flex px-4 w-fit">
  <div className="flex gap-2 ">
    <Avatar
      src="https://images.unsplash.com/photo-1664575600850-c4b712e6e2bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdvbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
      alt="avatar"
    />
    <div className="flex flex-col items-start">
      <h1 className="font-[600] text-[12px]">Contact Email not Linked</h1>
      <p className="font-[400] text-[10px] text-gray-400">Updated 1 day ago</p>
    </div>
  </div>
</td>; */
}
export const Tiket = () => {
  const TABLE_HEAD = [
    "Ticket details",
    "Customer name",
    "Date",
    "Priority",
    "",
  ];

  const TABLE_ROWS = [
    {
      name: "John Michael",
      job: "Manager",
      date: "23/04/18",
      priority: "boom",
    },
    {
      name: "Alexa Liras",
      job: "Developer",
      date: "23/04/18",
      priority: "boom",
    },
    {
      name: "Laurent Perrier",
      job: "Executive",
      date: "19/09/17",
      priority: "boom",
    },
    {
      name: "Michael Levi",
      job: "Developer",
      date: "24/12/08",
      priority: "boom",
    },
    {
      name: "Richard Gran",
      job: "Manager",
      date: "04/10/21",
      priority: "boom",
    },
  ];

  return (
    <main>
      <div className="w-full border border-gray-200 rounded-lg bg-white">
        <header className="p-8 flex items-center justify-between">
          <h1 className="font-[600] text-lg">All tickets</h1>
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-1 text-gray-500 text-sm">
              <SortAsc className="w-4 h-4" />
              Sort
            </button>
            <button className="flex items-center gap-1 text-gray-500 text-sm">
              <Filter className="w-4 h-4" />
              Filter
            </button>
          </div>
        </header>
        {/* table */}

        <div className="w-full">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th key={head} className="border-b border-blue-gray-100 p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map(({ name, job, date, priority }, index) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={name}>
                    <td className={classes}>
                      <div className="flex gap-2 ">
                        <Avatar
                          src="https://images.unsplash.com/photo-1664575600850-c4b712e6e2bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdvbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                          alt="avatar"
                        />
                        <div className="flex flex-col gap-2 items-start">
                          <h1 className="font-[600] text-[12px]">
                            Contact Email not Linked
                          </h1>
                          <p className="font-[400] text-[10px] text-gray-400">
                            Updated 1 day ago
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex flex-col gap-2 w-fit items-center">
                        <Typography
                          variant="h6"
                          className="font-bold text-gray-600"
                        >
                          {name}
                        </Typography>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal text-gray-600 text-[10px]"
                        >
                          {date}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex flex-col gap-2 w-fit items-start">
                        <Typography
                          variant="h6"
                          className="font-bold text-gray-600"
                        >
                          {date}
                        </Typography>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal text-gray-600 text-[10px]"
                        >
                          6:30 PM
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <Button color="red" className="p-2 rounded-full">
                        High
                      </Button>
                    </td>
                    <td className={classes}>
                      <button>
                        <MoreVertical className="w-5 h-5 text-gray-400" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {/* pagination */}
        <div className="w-full p-6 flex items-center justify-end">
          <div className="flex w-fit gap-8">
            <div>
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-1">
                  <p className="font-[200] text-gray-400 text-[12px]">
                    Rows per page:
                  </p>
                  <select
                    name=""
                    id=""
                    className="bg-transparent text-[12px] outline-none"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                  </select>
                </div>
                <div className="flex items-center gap-1">
                  <p className="font-[200] text-gray-400 text-[12px]">
                    1-8 of 1240
                  </p>
                  <div className="flex items-center gap-3">
                    <button>
                      <ChevronLeft className="w-5 h-5 text-gray-400" />
                    </button>
                    <button>
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
