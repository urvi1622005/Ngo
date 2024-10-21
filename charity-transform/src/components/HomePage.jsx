import React from "react";
import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import CardHome from "./CardHome";
import img1 from "../assets/img3.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img4.png";

// Framer Motion components
const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionFlex = motion(Flex);

const HomePage = () => {
  return (
    <MotionBox
      backgroundColor="white"
      color="black"
      width="1520px"
      marginTop="0 rem"
      paddingX={{ base: "1.5rem", sm: "7rem" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <VStack>
        <MotionText
          fontSize={{ base: "1rem", sm: "2rem" }}
          fontWeight={700}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Welcome to Charity
        </MotionText>
        <MotionText
          textAlign="center"
          fontSize={{ base: "0.7rem", sm: "1.5rem" }}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Charity transforms lives
        </MotionText>
      </VStack>

      <MotionFlex
        gap={4}
        flexDirection={{ base: "column", sm: "row" }}
        paddingY="1rem"
        paddingX={{ base: "", sm: "2rem" }}
        justifyContent="space-between"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <CardHome
          title="Become a volunteer"
          image={img1}
          desc="Help today because tomorrow you may be the one who needs helping!"
          footer="Read more"
          nav=""
        />
        <CardHome
          title="Make Donation"
          image={img2}
          desc="Help today because tomorrow you may be the one who needs helping!"
          footer="Read more"
          nav=""
        />
        <CardHome
          title="Fundraising"
          image={img3}
          desc="Help today because tomorrow you may be the one who needs helping!"
          footer="Read more"
          nav=""
        />
      </MotionFlex>
    </MotionBox>
  );
};

export default HomePage;
