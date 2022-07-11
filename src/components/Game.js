import React, { useState, useEffect } from "react";
import uniqid from "uniqid";
import Gameboard from "./Gameboard";
import Header from "./Header";
import Scoreboard from "./Scoreboard";

//Control game flow
const Game = () => {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [playerMemory, setPlayerMemory] = useState([]);
  const [items, setItems] = useState([
    {
      id: uniqid(),
      item: "abyssalWhip",
      path: require("../assets/1024px-Abyssal_whip_detail.png"),
    },
    {
      item: "arcane",
      path: require("../assets/1024px-Arcane_spirit_shield_detail.png"),
    },
    {
      item: "archersRing",
      path: require("../assets/1024px-Archers_ring_(i)_detail.png"),
    },
    {
      item: "bandosTassets",
      path: require("../assets/1024px-Bandos_tassets_detail.png"),
    },
    {
      item: "divineSuper",
      path: require("../assets/1024px-Divine_super_combat_potion(4)_detail.png"),
    },
    {
      item: "elysian",
      path: require("../assets/1024px-Elysian_spirit_shield_detail.png"),
    },
    {
      item: "3rdAgePick",
      path: require("../assets/1280px-3rd_age_pickaxe_detail.png"),
    },
    {
      item: "abyssalDagger",
      path: require("../assets/1280px-Abyssal_dagger_detail.png"),
    },
    {
      item: "ancestralTop",
      path: require("../assets/1280px-Ancestral_robe_top_detail.png"),
    },
    {
      item: "ags",
      path: require("../assets/1280px-Armadyl_godsword_detail.png"),
    },
    {
      item: "bgs",
      path: require("../assets/1280px-Bandos_godsword_detail.png"),
    },
    {
      item: "berserkerRing",
      path: require("../assets/1280px-Berserker_ring_(i)_detail.png"),
    },
    {
      item: "bladeOfSaeldor",
      path: require("../assets/1280px-Blade_of_saeldor_detail.png"),
    },
    {
      item: "corruptedBladeOfSaeldor",
      path: require("../assets/1280px-Blade_of_saeldor_(c)_detail.png"),
    },
    {
      item: "bloodRune",
      path: require("../assets/1280px-Blood_rune_detail.png"),
    },
    {
      item: "corruptedBowfa",
      path: require("../assets/1280px-Bow_of_faerdhinen_(c)_detail.png"),
    },
    {
      item: "fireRune",
      path: require("../assets/1280px-Fire_rune_detail.png"),
    },
    {
      item: "laveRune",
      path: require("../assets/1280px-Lava_rune_detail.png"),
    },
    {
      item: "sgs",
      path: require("../assets/1280px-Saradomin_godsword_detail.png"),
    },
    {
      item: "shrimps",
      path: require("../assets/1280px-Shrimps_detail.png"),
    },
    {
      item: "twistedBow",
      path: require("../assets/1280px-Twisted_bow_detail.png"),
    },
    {
      item: "zgs",
      path: require("../assets/1280px-Zamorak_godsword_detail.png"),
    },
    {
      item: "torture",
      path: require("../assets/800px-Amulet_of_torture_detail.png"),
    },
    {
      item: "bandosChestplate",
      path: require("../assets/800px-Bandos_chestplate_detail.png"),
    },
    {
      item: "2DoseSuper",
      path: require("../assets/800px-Super_combat_potion(2)_detail.png"),
    },
    {
      item: "4DoseSuper",
      path: require("../assets/800px-Super_combat_potion(4)_detail.png"),
    },
    {
      item: "ancestralBottom",
      path: require("../assets/Ancestral_robe_bottom_detail.png"),
    },
    {
      item: "anguish",
      path: require("../assets/Necklace_of_anguish_detail.png"),
    },
    {
      item: "suffering",
      path: require("../assets/Ring_of_suffering_detail.png"),
    },
    {
      item: "tormented",
      path: require("../assets/Tormented_bracelet_detail.png"),
    },
  ]);

  console.table(playerMemory);

  useEffect(() => {
    setItems([...scramble(items)]);
  }, []);

  useEffect(() => {
    console.log("playermemory updated");
    setScore(playerMemory.length);
  }, [playerMemory]);

  useEffect(() => {
    console.log("score updated");
    if (score === 30) {
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
      setPlayerMemory(playerMemory.concat([id]));
      setScore(score + 1);
    } else {
      console.log("Duplicate");
      setScore(0);
      setPlayerMemory([]);
    }
  };

  function handleclick(id) {
    console.log(id);
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
      <div className="header container">
        <Header />
        <Scoreboard
          score={score}
          setScore={setScore}
          bestScore={bestScore}
          setBestScore={setBestScore}
        />
      </div>
      <div className="gameboard-container">
        <Gameboard
          scramble={scramble}
          handleclick={handleclick}
          items={items}
        />
      </div>
    </div>
  );
};

export default Game;
