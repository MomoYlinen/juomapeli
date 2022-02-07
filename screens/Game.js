import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";
import React, { useState } from "react";
import Game from "../components/game";
import lisaaPelaaja from "../questions/testquestions";

const GamePlay = ({ navigation, route }) => {
  const [selected, setSelected] = useState("");

  const players = navigation.getParam("gamers");

  const handlerandomClick = () => {
    if (players.length <= 2) {
      setSelected("Lisää pelaajia");
      return;
    }

    const random = Math.floor(Math.random() * players.length);
    const randomplayer = players[random].player;
    console.log(randomplayer);
    const kysymys = lisaaPelaaja(randomplayer);
    setSelected(kysymys);
  };

  return (
    <Game
      handlerandomClick={handlerandomClick}
      selected={selected}
      style={{ flex: 1 }}
    />
  );
};

const styles = StyleSheet.create({});

export default GamePlay;
