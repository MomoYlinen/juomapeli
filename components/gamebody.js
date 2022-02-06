import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import lisaaPelaaja from "../questions/testquestions";
import Game from "./game";
import { MyReactNativeForm } from "./formTest";
import Players from "./playerlist";

const Gamebody = () => {
  const [selected, setSelected] = useState("");
  const [playerlist, setPlayerlist] = useState([]);

  const addPlayer = (player) => {
    player.key = Math.floor(Math.random() * 100000).toString();
    setPlayerlist((currentPlayer) => {
      return [...currentPlayer, player];
    });
  };

  const handleRemove = (key) => {
    console.log("Täällä", key);
    setPlayerlist((playerlist) => {
      return playerlist.filter((item) => item.key != key);
    });
  };

  const handlerandomClick = () => {
    if (playerlist.length === 0) {
      setSelected("Lisää pelaajia");
      return;
    }
    const random = Math.floor(Math.random() * playerlist.length);
    const randomplayer = playerlist[random].name;
    console.log(randomplayer);
    const kysymys = lisaaPelaaja(randomplayer);
    setSelected(kysymys);
  };
  console.log("pelaajalista", playerlist);

  return (
    <SafeAreaView>
      {/* <Players
        playerlist={playerlist}
        player={player}
        handleNameChange={handleNameChange}
        handleRemoveItem={handleRemoveItem}
        addPlayer={addPlayer}
      /> */}
      {/* <Game selected={selected} handlerandomClick={handlerandomClick} /> */}
      <SafeAreaView>
        <MyReactNativeForm addPlayer={addPlayer} />
      </SafeAreaView>
      <SafeAreaView>
        <FlatList
          data={playerlist}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={handleRemove}>
              <Players item={item} />
            </TouchableOpacity>
          )}
        />
      </SafeAreaView>
    </SafeAreaView>
  );
};
export default Gamebody;
