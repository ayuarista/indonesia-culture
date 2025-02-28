import React, { useState } from "react";
import Popup from "./Popup"; // Komponen popup yang sama

const UNESCOCard = ({ data }) => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleClosePopup = () => {
    setSelectedCard(null);
  };

  return (
    <div>
      {data.map((item) => (
        <div
          key={item.id}
          style={{
            border: "2px solid blue",
            padding: "10px",
            margin: "10px",
            cursor: "pointer",
          }}
          onClick={() => handleCardClick(item)}
        >
          <h3>{item.title}</h3>
          <p>{item.content}</p>
        </div>
      ))}

      {selectedCard && (
        <Popup content={selectedCard.content} onClose={handleClosePopup} />
      )}
    </div>
  );
};

export default UNESCOCard;