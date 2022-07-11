import React, { useState, useEffect } from "react";
import uniqid from "uniqid";
import Card from "./Card";

// Control display of the game
const Gameboard = () => {
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
  const devStyle = { border: "1px solid red" };

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

  function handleclick(e) {
    console.log(e.target);
    setItems([...scramble(items)]);
  }

  useEffect(() => {
    setItems([...scramble(items)]);
  }, []);

  return (
    <div className="gameboard" style={devStyle}>
      <Card
        items={items}
        handleclick={handleclick}
        scramble={scramble}
        key={items[0].id}
      />
    </div>
  );
};

export default Gameboard;
