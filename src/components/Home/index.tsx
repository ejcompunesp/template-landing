import { Divider } from "@chakra-ui/react";

type HomeProps = {
  title: string;
  description: string;
};

const Home = ({ title, description }: HomeProps) => (
  <div className="grid grid-cols-3 gap-4  w-screen h-screen bg-slate-100">
    <span>
      test
      <img />
    </span>
    <span>
      <div>{title}</div>
      <div>{description}</div>
      <Divider />
      <div></div>
    </span>
    <span>
      test
      <img />
    </span>
  </div>
);
export default Home;
