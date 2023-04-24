import { Home, Header, Projects } from "components";

export const Main = () => {
  return (
    <>
      <Header />
      <Home
        title="EJComp Agency"
        description="
        Turning and bringing idea into amazing product through next level visual display."
      />
      <Projects />
    </>
  );
};
