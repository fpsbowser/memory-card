import React, { useState, useEffect } from "react";
import uniqid from "uniqid";
import Gameboard from "./Gameboard";
import Header from "./Header";
import Scoreboard from "./Scoreboard";
import "../styles/Game.css";

const Game = () => {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [playerMemory, setPlayerMemory] = useState([]);
  const [items, setItems] = useState([
    {
      id: uniqid(),
      item: "Abyssal Whip",
      path: require("../assets/1024px-Abyssal_whip_detail.png"),
    },
    {
      item: "Arcane",
      path: require("../assets/1024px-Arcane_spirit_shield_detail.png"),
    },
    {
      item: "Archers Ring",
      path: require("../assets/1024px-Archers_ring_(i)_detail.png"),
    },
    {
      item: "Bandos Tassets",
      path: require("../assets/1024px-Bandos_tassets_detail.png"),
    },
    {
      item: "4 Dose Divine Super",
      path: require("../assets/1024px-Divine_super_combat_potion(4)_detail.png"),
    },
    {
      item: "Elysian",
      path: require("../assets/1024px-Elysian_spirit_shield_detail.png"),
    },
    {
      item: "3rd Age Pick",
      path: require("../assets/1280px-3rd_age_pickaxe_detail.png"),
    },
    {
      item: "Abyssal Dagger",
      path: require("../assets/1280px-Abyssal_dagger_detail.png"),
    },
    {
      item: "Ancestral Top",
      path: require("../assets/1280px-Ancestral_robe_top_detail.png"),
    },
    {
      item: "AGS",
      path: require("../assets/1280px-Armadyl_godsword_detail.png"),
    },
    {
      item: "BGS",
      path: require("../assets/1280px-Bandos_godsword_detail.png"),
    },
    {
      item: "Berserker Ring",
      path: require("../assets/1280px-Berserker_ring_(i)_detail.png"),
    },
    {
      item: "Blade Of Saeldor",
      path: require("../assets/1280px-Blade_of_saeldor_detail.png"),
    },
    {
      item: "Blade Of Saeldor (c)",
      path: require("../assets/1280px-Blade_of_saeldor_(c)_detail.png"),
    },
    {
      item: "Blood Rune",
      path: require("../assets/1280px-Blood_rune_detail.png"),
    },
    {
      item: "Bow of faerdhinen (c)",
      path: require("../assets/1280px-Bow_of_faerdhinen_(c)_detail.png"),
    },
    {
      item: "Fire Rune",
      path: require("../assets/1280px-Fire_rune_detail.png"),
    },
    {
      item: "Lave Rune",
      path: require("../assets/1280px-Lava_rune_detail.png"),
    },
    {
      item: "SGS",
      path: require("../assets/1280px-Saradomin_godsword_detail.png"),
    },
    {
      item: "Shrimps",
      path: require("../assets/1280px-Shrimps_detail.png"),
    },
    {
      item: "Twisted Bow",
      path: require("../assets/1280px-Twisted_bow_detail.png"),
    },
    {
      item: "ZGS",
      path: require("../assets/1280px-Zamorak_godsword_detail.png"),
    },
    {
      item: "Amulet of Torture",
      path: require("../assets/800px-Amulet_of_torture_detail.png"),
    },
    {
      item: "Bandos Chestplate",
      path: require("../assets/800px-Bandos_chestplate_detail.png"),
    },
    {
      item: "2 Dose Super Combat",
      path: require("../assets/800px-Super_combat_potion(2)_detail.png"),
    },
    {
      item: "4 Dose Super Combat",
      path: require("../assets/800px-Super_combat_potion(4)_detail.png"),
    },
    {
      item: "Ancestral Bottom",
      path: require("../assets/Ancestral_robe_bottom_detail.png"),
    },
    {
      item: "Necklace of Anguish",
      path: require("../assets/Necklace_of_anguish_detail.png"),
    },
    {
      item: "Ring of Suffering",
      path: require("../assets/Ring_of_suffering_detail.png"),
    },
    {
      item: "Tormented Bracelet",
      path: require("../assets/Tormented_bracelet_detail.png"),
    },
  ]);

  useEffect(() => {
    setItems([...scramble(items)]);
  }, []);

  useEffect(() => {
    // console.log("playermemory updated");
    setScore(playerMemory.length);
  }, [playerMemory]);

  useEffect(() => {
    // console.log("score updated");
    if (score === 30) {
      setBestScore(score);
      restartGame();
      alert("You have big brain. Touch grass");
    } else if (score >= bestScore) {
      setBestScore(score);
    }
  }, [score, bestScore]);

  const restartGame = () => {
    setScore(0);
    setPlayerMemory([]);
  };

  const checkPlayerArray = (array, id) => {
    if (!array.includes(id)) {
      setScore(score + 1);
      setPlayerMemory(playerMemory.concat([id]));
    } else {
      console.log("Duplicate");
      restartGame();
    }
  };

  function handleclick(id) {
    // console.log(id);
    checkPlayerArray(playerMemory, id);
    setItems([...scramble(items)]);
  }

  const scramble = (array) => {
    let m = array.length,
      t,
      i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    return array;
  };

  return (
    <div className="game-container">
      <div className="header-container">
        <Header />
        <Scoreboard
          score={score}
          setScore={setScore}
          bestScore={bestScore}
          setBestScore={setBestScore}
        />
      </div>
      <Gameboard scramble={scramble} handleclick={handleclick} items={items} />
    </div>
  );
};

export default Game;
