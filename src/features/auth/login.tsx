import EyeHideIcon from "@common/components/icons-new/EyeHideIcon";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import { useLogin } from "./login-model";
import EyeShowIcon from "@common/components/icons-new/EyeShowIcon";

export const Login = () => {
  const model = useLogin();
  return (
    <>
      <main className="flex justify-center items-center h-screen bg-gray-800">
        <Card className="w-96">
          <CardBody className="flex flex-col gap-4">
            <div className="mt-5 flex flex-col items-center w-full">
              {/* icon */}
              <div className="h-12 w-12 bg-indigo-500 rounded-full"></div>
              <Typography className="text-gray-400 font-bold mt-3">
                Dashboard Kit
              </Typography>
              <Typography className="font-bold mt-3 text-[20px]">
                Log In to Dashboard Kit
              </Typography>
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="font-bold text-gray-500 text-[14px]"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                value={model.user.email}
                onChange={model.handleForm}
                className="py-2 px-2 w-full border border-gray-200 rounded-md text-[12px] outline-none"
                placeholder="Email address"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="font-bold text-gray-500 text-[14px]"
              >
                Password
              </label>
              <div className="relative">
                {model.eye ? (
                  <EyeShowIcon
                    color="#6E7079"
                    className="absolute top-3 right-4 w-3 h-3 cursor-pointer"
                    onClick={model.handleEye}
                  />
                ) : (
                  <EyeHideIcon
                    color="#6E7079"
                    className="absolute top-3 right-4 w-3 h-3 cursor-pointer"
                    onClick={model.handleEye}
                  />
                )}
                <input
                  type={model.eye ? "text" : "password"}
                  name="password"
                  value={model.user.password}
                  onChange={model.handleForm}
                  className="py-2 px-2 w-full border border-gray-200 rounded-md text-[12px] outline-none"
                  placeholder="Password"
                  required
                />
              </div>
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              className="bg-indigo-500"
              onClick={model.handleLogin}
              fullWidth
            >
              Log in
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Don&apos;t have an account?
              <Typography
                as="a"
                href="#signup"
                variant="small"
                className="ml-1 font-bold text-indigo-400"
              >
                Sign up
              </Typography>
            </Typography>
          </CardFooter>
        </Card>
      </main>
    </>
  );
};
