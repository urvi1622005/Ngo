import React from "react";
import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const CardHome = ({ image, title, desc, footer, nav }) => {
  return (
    <NavLink to={nav} style={{ textDecoration: "none" }}>
      <MotionBox
        position="relative"
        overflow="hidden"
        boxShadow="md"
        borderRadius="md"
        backgroundColor="white"
        color="black"
        width={{ base: "90%", sm: "80%", lg: "20rem" }}  // Adjusted width for smaller boxes
        height={{ base: "auto", lg: "22rem" }}  // Adjusted height for smaller cards
        padding="1rem"  // Adjusted padding for better spacing
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)"  // Softer hover effect
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {/* Image Section */}
        <Box
          position="absolute"
          top="1rem"
          left="1rem"  // Align image to the left
          width="6rem"  // Adjusted size for the image
          height="6rem" // Adjusted size for the image
          borderRadius="md"
          overflow="hidden"
        >
          <Image
            src={image}
            objectFit="cover"
            width="100%"
            height="100%"
            transform="scale(1.1)"
            transition="transform 0.3s ease-in-out"
            _hover={{ transform: "scale(1.15)" }}  // Slightly larger on hover
          />
        </Box>

        {/* Content Section positioned at the bottom */}
        <Flex
          direction="column"
          justify="flex-end"
          height="100%"
          align="center"  // Center align content vertically
          mt="auto"
        >
          <VStack align="center" spacing={2} mb="1rem">  {/* Center align title and description */}
            <Text fontSize={{ base: "1.3rem", lg: "1.6rem" }} fontWeight="bold" textAlign="center">
              {title}
            </Text>
            <Text fontSize={{ base: "0.9rem", lg: "1rem" }} color="gray.700" textAlign="center">
              {desc}
            </Text>
          </VStack>

          <Text fontSize="0.9rem" color="teal.500" fontWeight="semibold" textAlign="center">
            {footer}
          </Text>
        </Flex>
      </MotionBox>
    </NavLink>
  );
};

export default CardHome;
