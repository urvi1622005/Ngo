// CardHome.js
import React from "react";
import { Box, Center, Flex, Image, Text, VStack, Button } from "@chakra-ui/react";
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
      width={{ base: "90%", sm: "80%", lg: "21rem" }}
      height={{ base: "auto", lg: "20rem" }}
      padding="1.5rem"
      whileHover={{
        scale: 1.02,
        boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.15)"
      }}
      marginX="auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onClick={onClick}
    >
      {/* Image Section */}
      <Box position="absolute" top="1rem" right="1rem" width="8rem" height="8rem" borderRadius="md" overflow="hidden">
        <Image
          src={image}
          objectFit="cover"
          width="90%"
          height="90%"
          margin="0.5rem"
          transform="scale(1.1)"
          transition="transform 0.3s ease-in-out"
          _hover={{ transform: "scale(1.2)" }}
        />
      </Box>

      {/* Content Section */}
      <Flex direction="column" width="60%" height="100%" justify="flex-end" mt="auto">
        <VStack align="start" spacing={3} mb="1rem">
          <Text fontSize={{ base: "1.5rem", lg: "1.8rem" }} fontWeight="bold">
            {title}
          </Text>
          <Text fontSize={{ base: "0.95rem", lg: "1.1rem" }} color="gray.700">
            {desc}
          </Text>
        </VStack>

        <Button colorScheme="teal" variant="link" fontSize="0.9rem" fontWeight="semibold" onClick={onClick}>
          {footer}
        </Button>
      </Flex>
    </MotionBox>
  );
};

export default CardHome;
