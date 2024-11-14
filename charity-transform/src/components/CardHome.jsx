// CardHome.js
import React from "react";
import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const CardHome = ({ image, title, desc, footer, onClick }) => {
  return (
    <MotionBox
      position="relative"
      overflow="hidden"
      boxShadow="lg"
      borderRadius="lg"
      background="white"
      color="black"
      width={{ base: "80vw", sm: "80vw", lg: "21rem" }}
      height={{ base: "auto", lg: "20rem" }}
      padding="1.5rem"
      whileHover={{ scale: 1.02, boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.15)" }}
      marginX="auto"
      onClick={onClick}
    >
      {/* Image Section */}
      <Box position="absolute" top="1rem" right="1rem" width="8rem" height="8rem" borderRadius="md" overflow="hidden">
        <Image src={image} objectFit="cover" width="90%" height="90%" margin="0.5rem" transform="scale(1.1)" transition="transform 0.3s ease-in-out" _hover={{ transform: "scale(1.2)" }} />
      </Box>

      {/* Content Section positioned at the bottom */}
      <Flex direction="column" width="60%" height="100%" justify="flex-end" mt="auto">
        <VStack align="start" spacing={3} mb="1rem">
          <Text fontSize={{ base: "1.5rem", lg: "1.8rem" }} fontWeight="bold">
            {title}
          </Text>
          <Text fontSize={{ base: "0.95rem", lg: "1.1rem" }} color="gray.700">
            {desc}
          </Text>
        </VStack>

        <Text fontSize="0.9rem" color="teal.500" fontWeight="semibold">
          {footer}
        </Text>
      </Flex>
    </MotionBox>
  );
};

export default CardHome;
