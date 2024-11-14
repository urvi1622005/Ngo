// HomePage.js
import React, { useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import CardHome from "./CardHome";
import CardModal from "./CardModal";
import img1 from "../assets/img3.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img4.png";

const HomePage = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const openModal = (title) => {
    setSelectedCard(title);
  };

  const closeModal = () => {
    setSelectedCard(null);
  };

  return (
    <>
      <Box backgroundColor="gray.100" color="black" maxWidth="100%" maxHeight="100vh" paddingX="4rem" paddingY="1rem">
        <Flex wrap="wrap" justifyContent="center" gap={10} marginY="2rem" paddingX="4rem">
          <CardHome
            title="Become a volunteer"
            image={img1}
            desc="Help today because tomorrow you may be the one who needs helping!"
            footer="Read more"
            onClick={() => openModal("Become a volunteer")}
          />
          <CardHome
            title="Make Donation"
            image={img2}
            desc="Help today because tomorrow you may be the one who needs helping!"
            footer="Read more"
            onClick={() => openModal("Make Donation")}
          />
          <CardHome
            title="Fundraising"
            image={img3}
            desc="Help today because tomorrow you may be the one who needs helping!"
            footer="Read more"
            onClick={() => openModal("Fundraising")}
          />
        </Flex>
      </Box>

      {/* Conditional rendering for modals based on the selected card */}
      {selectedCard && (
        <CardModal
          isOpen={!!selectedCard}
          onClose={closeModal}
          title={selectedCard}
        />
      )}
    </>
  );
};

export default HomePage;
