import React from "react";
import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import CardHome from "./CardHome";
import img1 from "../assets/img3.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img4.png";

const HomePage = () => {
  return (
    <Box width="1280px" marginTop="2rem" paddingX={{ base: "1.5rem", sm: "7rem" }}>
      <VStack>
        <Text fontSize={{ base: "1rem", sm: "2rem" }} fontWeight={700}>
          
        </Text>
        <Text textAlign="center" fontSize={{ base: "0.7rem", sm: "1.5rem" }}>
          "Charity transform
        </Text>
      </VStack>
      <Flex
        gap={4}
        flexDirection={{ base: "column", sm: "row" }}
        paddingY="1rem"
        paddingX={{ base: "", sm: "2rem" }}
        justifyContent="space-between"
        
      >
        <CardHome
          title="Become a volunteer"
          image={img1}
          desc="4 People Occupancy"
          footer="rollaway bed"
          nav="/rooms"
        />
        <CardHome
          title="Make Donation"
          image={img2}
          desc=""
          footer="rollaway bed"
          nav="/rooms"
          
        />
        <CardHome
          title="fundrising"
          image={img3}
          desc="2 People Occupancy"
          footer="Balcony View"
          nav="/rooms"
        />
      </Flex>
    </Box>
  );
};

export default HomePage;
