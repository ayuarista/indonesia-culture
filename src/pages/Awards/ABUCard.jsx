import React, { useState } from "react";
import Popup from "./Popup"; // Komponen popup yang sama
import { abuData } from "./abuData";

const ABUCard = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleClosePopup = () => {
    setSelectedCard(null);
  };

  return (
    <div>
      {abuData.map((item) => (
        <div
          key={item.id}
          style={{
            border: "2px solid red",
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
    </div>
  );
};

export default ABUCard;