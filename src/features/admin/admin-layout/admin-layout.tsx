import useAdmin from "./admin-layout-model";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
} from "@material-tailwind/react";
import {
  ChartPieIcon,
  TicketIcon,
  UserGroupIcon,
  UserIcon,
  NewspaperIcon,
} from "@heroicons/react/24/solid";
import { Bell, Lightbulb, SearchIcon } from "lucide-react";
import { LayoutContext } from "./layout-context";
import { Outlet } from "react-router-dom";
export default function AdminLayout() {
  const model = useAdmin();
  return (
    <main className="flex w-full h-screen ">
      <Card className=" h-full w-full max-w-[16rem] p-4 shadow-xl shadow-blue-gray-900/5 bg-gray-800 rounded-none">
        <div className="mb-2 p-4 flex items-center gap-3">
          <div className="w-8 h-8 bg-indigo-500 rounded-full"></div>
          <Typography variant="h5" className="text-gray-400">
            Dashboard Kit
          </Typography>
        </div>
        <List className="w-full text-gray-400">
          <ListItem>
            <ListItemPrefix>
              <ChartPieIcon className="h-5 w-5" />
            </ListItemPrefix>
            Overview
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <TicketIcon className="h-5 w-5" />
            </ListItemPrefix>
            Tiket
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <Lightbulb className="h-5 w-5" />
            </ListItemPrefix>
            Ideas
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <UserGroupIcon className="h-5 w-5" />
            </ListItemPrefix>
            Contacts
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <UserIcon className="h-5 w-5" />
            </ListItemPrefix>
            Agents
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <NewspaperIcon className="h-5 w-5" />
            </ListItemPrefix>
            Articles
          </ListItem>
        </List>
      </Card>
      <section className="h-full flex-1 px-8 overflow-y-scroll ">
        <nav className="w-full flex justify-between items-center pt-2">
          <div>
            <Typography variant="h4" className="text-gray-800">
              {model.headerName}
            </Typography>
          </div>
          <div className="flex items-center justify-between w-[20%]">
            <div className="flex items-center gap-2">
              <SearchIcon className="text-gray-400 w-5 h-5" />
              <Bell className="text-gray-400 w-5 h-5" />
            </div>
            <div className="h-full flex items-center pb-1 text-gray-400">|</div>
            <div className="flex items-center gap-2">
              <p className="text-[14px] text-gray-800 font-[600]">Nata Bagus</p>
              <Avatar
                src="https://images.unsplash.com/photo-1581382575275-97901c2635b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                alt="avatar"
                size="sm"
                className="w-7 h-7"
              />
            </div>
          </div>
        </nav>
        <main className="pt-16">
          <LayoutContext.Provider
            value={{ name: model.headerName, change: model.changeHeaderName }}
          >
            <Outlet />
          </LayoutContext.Provider>
        </main>
      </section>
    </main>
  );
}
