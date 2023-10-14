import { Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Grid
      templateAreas={`
                  "main"
                  "footer"`}
      h="100vh"
      w="100vw"
      color="blackAlpha.700"
      fontWeight="bold"
      templateRows={"1fr 60px"}
    >
      <GridItem area={"main"}>{children}</GridItem>
      <GridItem
        bg="gray.100"
        area={"footer"}
        display={"grid"}
        placeItems={"center"}
      >
        <Text>Powered by Kyanon Digital @ 2023</Text>
      </GridItem>
    </Grid>
  );
};

export default MainLayout;
