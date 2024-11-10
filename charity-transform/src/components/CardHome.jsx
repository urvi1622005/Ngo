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
        boxShadow="lg"
        borderRadius="lg"
        backgroundColor="white"
        color="black"
        width={{ base: "90%", sm: "80%", lg: "21rem" }}
        height={{ base: "auto", lg: "20rem" }}
        padding="1.5rem"
        whileHover={{
          scale: 1.02,
          boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.15)"
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Image Section */}
        <Box
          position="absolute"
          top="1rem"
          right="1rem"
          width="8rem"
          height="8rem"
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
            _hover={{ transform: "scale(1.2)" }}
          />
        </Box>

        {/* Content Section positioned at the bottom */}
        <Flex direction="column" height="100%" justify="flex-end" mt="auto">
          <VStack align="start" spacing={3} mb="1rem">
            <Text fontSize={{ base: "1.5rem", lg: "1.8rem" }} fontWeight="bold">
              {title}
            </Text>
            <Text fontSize={{ base: "1rem", lg: "1.1rem" }} color="gray.700">
              {desc}
            </Text>
          </VStack>

          <Text fontSize="1rem" color="teal.500" fontWeight="semibold">
            {footer}
          </Text>
        </Flex>
      </MotionBox>
    </NavLink>
  );
};

export default CardHome;
