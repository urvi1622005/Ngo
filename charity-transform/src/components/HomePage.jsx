// HomePage.js
import React, { useState } from "react";
import { Box, Button, Flex, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Text, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import CardHome from "./CardHome";
import img1 from "../assets/img3.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img4.png";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const HomePage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const openVolunteerForm = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <MotionBox backgroundColor="gray.100" color="black" maxWidth="100%" paddingX={{ base: "2rem", sm: "2rem", lg: "4rem" }} paddingY="1rem" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <MotionFlex wrap="wrap" justifyContent="center" gap={10} marginY={{ base: "2rem", lg: "2rem", sm: "1rem" }} paddingX={{ base: "6rem", sm: "3rem", lg: "4rem" }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.6 }}>
          
          {/* Card for Volunteer */}
          <CardHome
            title="Become a Volunteer"
            image={img1}
            desc="Help today because tomorrow you may be the one who needs helping!"
            footer="Read more"
            onClick={openVolunteerForm}
          />

          {/* Card for Donation */}
          <CardHome
            title="Make Donation"
            image={img2}
            desc="Help today because tomorrow you may be the one who needs helping!"
            footer="Read more"
            onClick={() => navigate("/donation")}
          />

          {/* Card for Fundraising */}
          <CardHome
            title="Fundraising"
            image={img3}
            desc="Help today because tomorrow you may be the one who needs helping!"
            footer="Read more"
            onClick={() => navigate("/fundraising")}
          />

        </MotionFlex>
      </MotionBox>

      {/* Modal for Volunteer Form */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Become a Volunteer</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4} align="start">
              <Text fontSize="lg">Please fill out the form to become a volunteer.</Text>
              {/* Form fields (replace these with actual form components) */}
              <input type="text" placeholder="Name" className="w-full p-2 border rounded-md" />
              <input type="email" placeholder="Email" className="w-full p-2 border rounded-md" />
              <Button colorScheme="teal" onClick={closeModal}>Submit</Button>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default HomePage;
