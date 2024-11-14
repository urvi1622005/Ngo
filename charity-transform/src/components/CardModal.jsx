// CardModal.js
import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

const CardModal = ({ isOpen, onClose, title }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form>
            <FormControl id="name" isRequired mb="4">
              <FormLabel>Name</FormLabel>
              <Input placeholder="Enter your name" />
            </FormControl>

            <FormControl id="email" isRequired mb="4">
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="Enter your email" />
            </FormControl>

            {title === "Fundraising" && (
              <FormControl id="amount" isRequired mb="4">
                <FormLabel>Amount</FormLabel>
                <Input type="number" placeholder="Enter amount" />
              </FormControl>
            )}

            {title === "Make Donation" && (
              <FormControl id="message" mb="4">
                <FormLabel>Message</FormLabel>
                <Textarea placeholder="Leave a message" />
              </FormControl>
            )}

            <Button colorScheme="teal" type="submit" mt="4" width="full">
              Submit
            </Button>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CardModal;
