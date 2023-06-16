import { Breadcrumbs } from "@common/components";
import EditIcon from "@common/components/icons-new/EditIcon";
import PlusIcon from "@common/components/icons-new/PlusIcon";
import SearchIcon from "@common/components/icons-new/SearchIcon";
import PencilSquer from "@common/components/icons/PencilSquer";
import TrashIcon from "@common/components/icons/TrashIcon";
import PaginationNew from "@common/components/pagination/PaginationNew";
import {
  Card,
  Input,
  Option,
  Select,
  Typography,
  Button,
  Switch,
} from "@material-tailwind/react";
import { useUserAdmin } from "./user-admin-view-model";

export const UserAdmin = () => {
  const model = useUserAdmin();
  return (
    <>
      <main>
        <Breadcrumbs items={["User Admin"]} />
      </main>
      <Card className="w-full border border-gray-300 rounded-xl mt-8">
        <div className="px-12 py-6">
          <Typography variant="h3" color="black">
            User Admin
          </Typography>
        </div>
        <div className="py-4 px-6 flex items-end justify-between gap-4 bg-[#F2F4F5]">
          <div className="w-1/3 bg-white">
            <Input
              label="Search Name"
              icon={<SearchIcon color="#231F20" className="w-5 h-5" />}
            />
          </div>
          <section className="flex gap-4 items-center">
            <div className="flex gap-3 items-center">
              <Typography>Sort by</Typography>
              <div className=" bg-white">
                <Select variant="outlined">
                  <Option>data</Option>
                </Select>
              </div>
            </div>

            <Button
              onClick={model.toFormCreate}
              className="flex items-center gap-2"
            >
              <PlusIcon className="w-5 h-5" />
              Create New Admin
            </Button>
          </section>
        </div>
        <table className="w-full">
          <thead>
            <tr className="border-y border-gray-300">
              <th className="py-3 pl-12 text-start">
                <Typography variant="h6">Nama</Typography>
              </th>
              <th className="py-3 pl-12 text-start">
                <Typography variant="h6">Email</Typography>
              </th>
              <th className="py-3 pl-12 text-start">
                <Typography variant="h6">Role</Typography>
              </th>
              <th className="py-3 pl-12 text-start">
                <Typography variant="h6">Status</Typography>
              </th>
              <th className="py-3 pl-12 text-start">
                <Typography variant="h6">Action</Typography>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-300">
              <td className="py-3 pl-12">
                <Typography variant="paragraph">Udin Jaenudi</Typography>
              </td>
              <td className="py-3 pl-12">
                <Typography variant="paragraph">
                  udinjaenudi@email.com
                </Typography>
              </td>
              <td className="py-3 pl-12">
                <Typography variant="paragraph">Super Admin</Typography>
              </td>
              <td className="py-3 pl-12">
                <div className="flex gap-3 items-center">
                  {" "}
                  <Switch /> Active
                </div>
              </td>
              <td className="py-3 pl-12">
                <div className="flex gap-4 items-center">
                  <Button className="bg-[#F79009] flex items-center gap-2">
                    <PencilSquer className="w-5 h-5 text-white" />
                    Edit
                  </Button>

                  <Button color="red" size="md">
                    <TrashIcon className="h-5 w-5" />
                  </Button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <footer className="w-full py-4 px-10 flex items-center justify-between">
          <Typography variant="h6">
            1 - 20 of 21 <span className="font-[400]">User Admin</span>{" "}
          </Typography>
          <PaginationNew />
        </footer>
      </Card>
    </>
  );
};
