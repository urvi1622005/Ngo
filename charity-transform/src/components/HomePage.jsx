// import React from "react";
import { Box, Flex} from "@chakra-ui/react";
import { motion } from "framer-motion";
import CardHome from "./CardHome";
import img1 from "../assets/img3.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img4.png";

// Framer Motion components
const MotionBox = motion(Box);
// const MotionText = motion(Text);
const MotionFlex = motion(Flex);

const HomePage = () => {
  return (
    <>
    <MotionBox
      backgroundColor="gray.100"
      color="black"
      maxWidth="100%"   
      maxHeight="100vh"             
      paddingX={{ base: "2rem", sm: "2rem", lg: "4rem" }}
      paddingY="1rem"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* <VStack spacing={4} textAlign="center" mb={{ base: "2rem", sm: "4rem" }}>
        <MotionText
          paddingTop="1rem"
          fontSize={{ base: "1.5rem", sm: "2.5rem", lg: "3rem" }}
          fontWeight={700}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
      
        </MotionText>
        <MotionText
          fontSize={{ base: "0.9rem", sm: "1.25rem", lg: "1.5rem" }}
          color="gray.600"
          maxWidth="800px"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
        
        </MotionText>
      </VStack> */}

      <MotionFlex
        wrap="wrap"
        paddingBlockEnd={{base:"2rem", sm:"2rem"}}
        justifyContent="center"
        gap={10}
        marginY={{ base: "2rem", lg: "2rem" , sm:"1rem"}}
        paddingX={{ base: "6rem", sm: "3rem", lg: "4rem" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <CardHome
          title="Become a volunteer"
          image={img1}
          desc="Help today because tomorrow you may be the one who needs helping!"
          footer="Read more"
          margin="auto"
          fontSize="5rem"
          
          alignItems="flex-end"
          justifyContent="center"
          display="flex"
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
    </>
  );
};

export default HomePage;
