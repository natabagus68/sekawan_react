import { Breadcrumbs } from "@common/components";
import EyeHideIcon from "@common/components/icons-new/EyeHideIcon";
import TrashIcon from "@common/components/icons/TrashIcon";
import {
  Button,
  Card,
  Input,
  Option,
  Select,
  Typography,
} from "@material-tailwind/react";
import { useUserAdminForm } from "./user-admin-form-view-model";
import { EyeIcon } from "@common/components/icons";
import SaveIcon from "@common/components/icons/SaveIcon";

export const UserAdminForm = () => {
  const model = useUserAdminForm();
  return (
    <>
      <main>
        <Breadcrumbs items={["User Admin", "Create New Admin"]} />
      </main>
      <Card className="w-full border border-gray-300 rounded-xl mt-8">
        <div className="px-12 py-6 border-b border-gray-300">
          <Typography variant="h3" color="black">
            Create New Admin
          </Typography>
        </div>
        <main className="pr-32 pl-12 py-12">
          <form action=" " className="w-full">
            <div className="w-full bg-white mb-5 flex flex-col gap-3">
              <label>Nama</label>
              <Input size="lg" className="outline-none" label="Full Name" />
            </div>
            <div className="w-full bg-white mb-5 flex flex-col gap-3">
              <label>Email</label>
              <Input
                size="lg"
                className="outline-none"
                label="yourname@email.com"
              />
            </div>
            <div className="w-full bg-white mb-5 flex flex-col gap-3 relative">
              <label>Password</label>
              <Input
                type={model.openEye ? "text" : "password"}
                size="lg"
                className="outline-none"
                label="Password"
                icon={model.openEye ? <EyeIcon /> : <EyeHideIcon />}
              />
              <div
                className="w-6 h-6 bg-transparent absolute right-2 top-12"
                onClick={model.handleEye}
              ></div>
            </div>
            <div className="w-full bg-white mb-5 flex flex-col gap-3">
              <label>Role</label>
              <Select label="Select Role">
                <Option>Role</Option>
              </Select>
            </div>
            <div className="mt-8 w-48">
              <Button
                variant="filled"
                className="flex gap-3 items-center justify-center bg-[#194E86] text-center w-full"
              >
                <SaveIcon className="w-5 h-5" />
                Save
              </Button>
            </div>
          </form>
        </main>
      </Card>
    </>
  );
};
