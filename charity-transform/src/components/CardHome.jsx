import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const CardHome = ({ image, title, desc, footer, nav }) => {
  return (
    <NavLink to={nav}>
      <Box
        boxShadow="-1px 4px 5px 0px rgba(0,0,0,0.58)"
        borderRadius="1rem"
        color="pink"
        width={{ base: "14rem", sm: "23rem" }}
        backgroundColor="white"
        padding="1rem"
        marginX={{ base: "2rem", sm: "0" }}
        height={{ base: "auto", sm: "25rem" }}
        
      >
        <Flex width="330px" height ="230px"flexDirection="column" gap={2}>
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
      </Box>
    </NavLink>
  );
};

export default CardHome;
