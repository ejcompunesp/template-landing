import { Box } from "@chakra-ui/react";
import { Home, Projects, Services } from "components";

export const Main = () => {
  return (
    <>
      <Home
        title="EJComp Agency"
        description="
        Turning and bringing idea into amazing product through next level visual display."
      />
      <Projects />
      <Box my="8" mx="40">
        <Services />
      </Box>
    </>
  );
};
