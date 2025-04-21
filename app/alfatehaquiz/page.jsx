'use client';
import React, { useState } from "react";
import BismTextSound from "../components/SoundTextComponent.jsx/Bism";
import AllahTextSound from "../components/SoundTextComponent.jsx/Allah";
import AlraheemTextSound from "../components/SoundTextComponent.jsx/Alraheem";
import AlrahmanTextSound from "../components/SoundTextComponent.jsx/Alrahman";
import RestartButton from "../components/restartButton";
import HomeButton from "../components/homeButton";

// Function to compare arrays
function arraysAreEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i].key !== arr2[i].key) {
      return false;
    }
  }
  return true;
}

const ClickMoveZones = () => {
  // State for each zone
  const [zone1Items, setZone1Items] = useState([
    <AllahTextSound key="allah" />,
    <BismTextSound key="bism" />,
    <AlraheemTextSound key="alraheem" />,
    <AlrahmanTextSound key="alrahman" />,
  ]);
  const [zone2Items, setZone2Items] = useState([]);
  const [checkedAnswer, setCheckedAnswer] = useState(false);

  const correctBoard = [
    <BismTextSound key="bism" />,
    <AllahTextSound key="allah" />,
    <AlrahmanTextSound key="alrahman" />,
    <AlraheemTextSound key="alraheem" />,
    ];

  const playCorrectSound = () => {
    const soundCorrect = new Audio('/correct_sound_effect.mp3');
    soundCorrect.play();
  };

  const playWrongSound = () => {
    const soundWrong = new Audio('/wrong_sound_effect.mp3');
    soundWrong.play();
  };

  const checkAnswer = () => {
    setCheckedAnswer(true);
  };

  // Function to render answer symbols
  const renderAnswerSymbol = () => {
    if (checkedAnswer) {
      if (arraysAreEqual(zone2Items, correctBoard)) {
        playCorrectSound();
        return <span className="text-4xl block mx-auto">✅</span>;
      } else {
        playWrongSound();
        return <span className="text-4xl block mx-auto">❌</span>;
      }
    }
    return null;
  };

  // Function to handle item click
  const handleItemClick = (item, fromZone) => {
    if (fromZone === "zone1") {
      setZone1Items((prev) => prev.filter((i) => i.key !== item.key));
      setZone2Items((prev) => [...prev, item]);
    } else if (fromZone === "zone2") {
      setZone2Items((prev) => prev.filter((i) => i.key !== item.key));
      setZone1Items((prev) => [...prev, item]);
    }
  };

  return (
    <div>
      <h3>Zone 1</h3>
      <div style={styles.zone}>
        {zone1Items.map((item) => (
          <div key={item.key} style={styles.item} onClick={() => handleItemClick(item, "zone1")}>
            {item}
          </div>
        ))}
      </div>

      <h3>Zone 2</h3>
      <div style={styles.zoneRTL}>
        {zone2Items.map((item) => (
          <div key={item.key} style={styles.item} onClick={() => handleItemClick(item, "zone2")}>
            {item}
          </div>
        ))}
      </div>

      <div>
        <ul className="flex flex-wrap">
          <li>
            <RestartButton />
          </li>
          <li>
            <button
              onClick={checkAnswer}
              className="bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-5 sm:py-4 sm:px-10 rounded"
            >
              Check
            </button>
          </li>
          <li>
            <HomeButton />
          </li>
          <li>
            <div className="pr-64 pt-6">{renderAnswerSymbol()}</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

const styles = {
  zone: {
    display: "flex",
    gap: "10px",
    padding: "10px",
    border: "2px dashed gray",
    minHeight: "50px",
    alignItems: "center",
    justifyContent: "center",
  },
  zoneRTL: {
    display: "flex",
    gap: "10px",
    padding: "10px",
    border: "2px dashed gray",
    minHeight: "50px",
    alignItems: "center",
    flexDirection: "row-reverse",
  },
  item: {
    padding: "5px 5px",
    background: "#007BFF",
    color: "white",
    cursor: "pointer",
    borderRadius: "5px",
  },
};

export default ClickMoveZones;

