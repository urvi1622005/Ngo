import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const CardHome = ({ image, title, desc, footer, nav }) => {
  return (
    <NavLink to={nav}>
      <MotionBox
      
        boxShadow="-1px 4px 5px 0px rgba(0,0,0,0.58)"
        borderRadius="1rem"
        color="Black"
        width={{ base: "14rem", sm: "23rem" }}
        backgroundColor="gray.100" // Changed from white to light grey
        padding="1rem"
        marginX={{ base: "2rem", sm: "0" }}
        height={{ base: "auto", sm: "25rem" }}
        whileHover={{ scale: 1.05 }} // Add a slight scaling effect on hover
        whileTap={{ scale: 0.95 }} // Add a shrinking effect when the card is clicked/tapped
        initial={{ opacity: 0, y: 50 }} // Start from opacity 0 and translate Y
        animate={{ opacity: 1, y: 0 }} // Fade in and slide up
        transition={{ duration: 0.5 }} // Transition effect duration
      >
        <Flex width="330px" height="230px" flexDirection="column" gap={2}>
          <Image
            borderRadius="1rem"
            width="50%"
            height={{ base: "10rem", sm: "15rem" }}
            src={image}
            objectFit="cover"
          />
          <Text fontSize={{ base: "1rem", sm: "1.5rem" }} fontWeight={600}>
            {title}
          </Text>
          <Text fontSize={{ base: "0.8rem", sm: "1rem" }}>{desc}</Text>
          <Text fontSize={{ base: "0.8rem", sm: "1rem" }}>{footer}</Text>
        </Flex>
      </MotionBox>
    </NavLink>
  );
};

export default CardHome;
