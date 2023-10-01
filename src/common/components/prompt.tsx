import { Card, CardBody, Typography } from "@material-tailwind/react";

export const Prompt = ({ head, content }) => {
  return (
    <Card className="w-[230px] pt-2 px-10 group hover:text-indigo-500">
      <CardBody className="flex flex-col items-center justify-center">
        <Typography variant="h5" className={`mb-3 text-gray-400`}>
          {head}
        </Typography>
        <Typography variant="h5" className="text-4xl text-black">
          {content}
        </Typography>
      </CardBody>
    </Card>
  );
};
