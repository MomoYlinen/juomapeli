import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import BaseGame from "./GameComponents/BaseGame";
import getRandomInt from "../utils/getRandom";
import ColorGame from "./GameComponents/ColorGame";
import Header from "./GameComponents/Header";
import GameButton from "./GameComponents/GameButton";
import Questions from "../questions/Questions";
import AppLoading from "expo-app-loading";
import GameEnding from "./GameComponents/GameEnding";

const GamePlay = ({ navigation, route }) => {
  const [selected, setSelected] = useState();
  const [counter, setCounter] = useState(0);
  const [questionNumber, setQuestionNumber] = useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33,
  ]);
  const [startNewGame, setStartNewGame] = useState(true);
  const [playerOne, setPlayerOne] = useState("");
  const [playerTwo, setPlayerTwo] = useState("");
  const [neededPlayers, setNeededPlayers] = useState("");
  const [gameMode, setGameMode] = useState("");

  const players = navigation.getParam("gamers");

  const backToMainMenu = () => {
    navigation.navigate("Home");
  };

  const handlerandomClick = () => {
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

    if (counter === 33) {
      setNeededPlayers("");
      setGameMode("End");
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
      const randomInt = getRandomInt(0, 7);
      const kysymys = Questions[randomInt];

      if (kysymys.playersNeeded === 1) {
        setNeededPlayers(playerOne);
      }

      if (kysymys.playersNeeded === 2) {
        setNeededPlayers(`${playerOne} ja ${playerTwo}`);
      }

      if (kysymys.playersNeeded === 0) {
        setNeededPlayers("");
      }
      setGameMode(kysymys.gamemode);
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
      }
      setGameMode(kysymys.gamemode);
      setSelected(kysymys.question);
      setCounter(counter + 1);
    }
  };

  if (startNewGame === true) {
    setStartNewGame(false);
    handlerandomClick();
  }

  if (gameMode === "Lataa") {
    return <AppLoading />;
  }

  if (gameMode === "BaseGame") {
    return (
      <View style={{ flex: 1, backgroundColor: "#FCFCFC" }}>
        <Header style={{ flex: 1 }} />
        <View style={{ flex: 7 }}>
          <BaseGame
            selected={selected}
            counter={counter}
            playerOne={neededPlayers}
            style={{ flex: 7 }}
          />
        </View>
        <GameButton style={{ flex: 1 }} handlerandomClick={handlerandomClick} />
      </View>
    );
  }

  if (gameMode === "ColorGame") {
    return (
      <View style={{ flex: 1, backgroundColor: "#FCFCFC" }}>
        <Header style={{ flex: 1 }} />
        <View style={{ flex: 7 }}>
          <ColorGame
            selected={selected}
            counter={counter}
            playerOne={neededPlayers}
            style={{ flex: 7 }}
          />
        </View>
        <GameButton style={{ flex: 1 }} handlerandomClick={handlerandomClick} />
      </View>
    );
  }

  if (gameMode === "End") {
    return (
      <View style={{ flex: 1, backgroundColor: "#FCFCFC" }}>
        <Header style={{ flex: 1 }} />
        <View style={{ flex: 7 }}>
          <GameEnding
            backToHome={backToMainMenu}
            handlerandomClick={handlerandomClick}
            style={{ flex: 7 }}
          />
        </View>
      </View>
    );
  }
};

export default GamePlay;
