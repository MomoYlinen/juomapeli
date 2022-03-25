import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";
import React, { useState } from "react";
import BaseGame from "./GameComponents/BaseGame";
import getRandomInt from "../utils/getRandom";
import ColorGame from "./GameComponents/ColorGame";
import Header from "./GameComponents/Header";
import GameButton from "./GameComponents/GameButton";
import Questions from "../questions/Questions";

const GamePlay = ({ navigation, route }) => {
  const [selected, setSelected] = useState();
  const [counter, setCounter] = useState(0);
  const [questionNumber, setQuestionNumber] = useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23,
  ]);
  const [startNewGame, setStartNewGame] = useState(true);
  const [playerOne, setPlayerOne] = useState("");
  const [playerTwo, setPlayerTwo] = useState("");
  const [neededPlayers, setNeededPlayers] = useState("");

  const players = navigation.getParam("gamers");

  const handlerandomClick = () => {
    if (players.length <= 2) {
      setSelected("Lisää pelaajia");
      return;
    }
    console.log(counter);
    if (counter === 0) {
      let randomize = questionNumber
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
      setQuestionNumber(randomize);

      let randomPlayerlist = players
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);

      setPlayerOne(randomPlayerlist[0].player);
      setPlayerTwo(randomPlayerlist[1].player);
    }

    if (counter === 22) {
      setNeededPlayers("");
      setSelected("Peli on päättynyt");
      setCounter(0);
      return;
    }

    let randomPlayerlist = players
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

    setPlayerOne(randomPlayerlist[0].player);
    setPlayerTwo(randomPlayerlist[1].player);
    if (counter === 0) {
      const randomInt = getRandomInt(0, 10);
      const kysymys = Questions[randomInt];

      if (kysymys.playersNeeded === 1) {
        setNeededPlayers(playerOne);
        console.log("Yksi");
      }

      if (kysymys.playersNeeded === 2) {
        setNeededPlayers(`${playerOne} ja ${playerTwo}`);
        console.log("Kaksi");
      }

      if (kysymys.playersNeeded === 0) {
        setNeededPlayers("");
        console.log("Kaikki");
      }

      setSelected(kysymys.question);
      setCounter(counter + 1);
    } else {
      const kysymys = Questions[questionNumber[counter]];

      if (kysymys.playersNeeded === 1) {
        setNeededPlayers(playerOne);
      }

      if (kysymys.playersNeeded === 2) {
        setNeededPlayers(`${playerOne} ja ${playerTwo}`);
      }

      if (kysymys.playersNeeded === 0) {
        setNeededPlayers("");
        console.log("Kaikki");
      }

      setSelected(kysymys.question);
      setCounter(counter + 1);
    }
  };

  if (startNewGame === true) {
    setStartNewGame(false);
    handlerandomClick();
  }
  return (
    <View style={{ flex: 1, backgroundColor: "#FCFCFC" }}>
      <Header style={{ flex: 1 }} />
      {counter % 5 === 0 ? (
        <ColorGame playerOne={playerOne} style={{ flex: 7 }} />
      ) : (
        <BaseGame
          selected={selected}
          counter={counter}
          playerOne={neededPlayers}
          style={{ flex: 7 }}
        />
      )}
      <GameButton style={{ flex: 1 }} handlerandomClick={handlerandomClick} />
    </View>
  );
};

export default GamePlay;
