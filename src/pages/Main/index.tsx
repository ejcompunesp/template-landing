import { Box } from "@chakra-ui/react";
import { Home, Projects, Services, Header, About } from "components";

export const Main = () => {
  return (
    <>
      <Header />
      <Home
        title="EJComp Agency"
        description="
        Turning and bringing idea into amazing product through next level visual display."
      />
      <About />
      <Projects />
      <Box my="8" mx="40">
        <Services />
      </Box>
    </>
  );
};
