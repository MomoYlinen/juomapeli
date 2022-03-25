import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";
import React, { useState } from "react";
import Game from "../components/game";
import lisaaPelaaja from "../questions/testquestions";
import getRandomInt from "../utils/getRandom";
import Game2 from "../components/guessingGame";

const GamePlay = ({ navigation, route }) => {
  const [selected, setSelected] = useState();
  const [counter, setCounter] = useState(0);
  const [questionNumber, setQuestionNumber] = useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,
  ]);
  const [startNewGame, setStartNewGame] = useState(true);
  const [playerOne, setPlayerOne] = useState("");
  const [playerTwo, setPlayerTwo] = useState("");

  const players = navigation.getParam("gamers");

  const handlerandomClick = () => {
    if (players.length <= 2) {
      setSelected("Lisää pelaajia");
      return;
    }

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

    if (counter > 33) {
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
    console.log(playerOne, playerTwo);
    if (counter === 0) {
      const randomInt = getRandomInt(0, 30);
      const kysymys = lisaaPelaaja(
        randomPlayerlist[0].player,
        randomPlayerlist[1].player,
        questionNumber[randomInt]
      );

      setSelected(kysymys);
      setCounter(counter + 1);
    } else {
      const kysymys = lisaaPelaaja(
        playerOne,
        playerTwo,
        questionNumber[counter]
      );
      setSelected(kysymys);
      setCounter(counter + 1);
    }
  };

  if (startNewGame === true) {
    setStartNewGame(false);
    handlerandomClick();
  }
  if (counter % 3 === 0) {
    return (
      <Game2
        handlerandomClick={handlerandomClick}
        selected={selected}
        counter={counter}
        playerOne={playerOne}
        style={{ flex: 1 }}
      />
    );
  } else {
    return (
      <Game
        handlerandomClick={handlerandomClick}
        selected={selected}
        counter={counter}
        style={{ flex: 1 }}
      />
    );
  }
};

export default GamePlay;
