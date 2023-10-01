import { IconButton, Typography } from "@material-tailwind/react";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronLeft,
  ChevronRight,
  Filter,
  SortAsc,
} from "lucide-react";

export const Tiket = () => {
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
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-sm text-gray-400 py-2 border-b-2 border-gray-400">
                  Ticket detail
                </th>
                <th className="text-sm text-gray-400 py-2 border-b-2 border-gray-400">
                  Customer name
                </th>
                <th className="text-sm text-gray-400 py-2 border-b-2 border-gray-400">
                  Date
                </th>
                <th className="text-sm text-gray-400 py-2 border-b-2 border-gray-400">
                  Priority
                </th>
                <th className="text-sm text-gray-400 py-2 border-b-2 border-gray-400"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-sm py-2 border-b border-gray-400 text-center">
                  Ticket detail
                </td>
                <td className="text-sm py-2 border-b border-gray-400 text-center">
                  Customer name
                </td>
                <td className="text-sm py-2 border-b border-gray-400 text-center">
                  Date
                </td>
                <td className="text-sm py-2 border-b border-gray-400 text-center">
                  Priority
                </td>
                <td className="text-sm py-2 border-b border-gray-400 text-center"></td>
              </tr>
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
