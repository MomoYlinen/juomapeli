import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";
import React, { useState } from "react";
import Game from "../components/game";
import lisaaPelaaja from "../questions/testquestions";
import getRandomInt from "../utils/getRandom";

const GamePlay = ({ navigation, route }) => {
  const [selected, setSelected] = useState();
  const [counter, setCounter] = useState(0);
  const [questionNumber, setQuestionNumber] = useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,
  ]);
  const [startNewGame, setStartNewGame] = useState(true);

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

    const randomPlayerOne = randomPlayerlist[0].player;
    const randomPlayerTwo = randomPlayerlist[1].player;
    console.log(randomPlayerOne, randomPlayerTwo);
    if (counter === 0) {
      const randomInt = getRandomInt(0, 30);
      const kysymys = lisaaPelaaja(
        randomPlayerOne,
        randomPlayerTwo,
        questionNumber[randomInt]
      );

      setSelected(kysymys);
      setCounter(counter + 1);
    } else {
      const kysymys = lisaaPelaaja(
        randomPlayerOne,
        randomPlayerTwo,
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

  return (
    <Game
      handlerandomClick={handlerandomClick}
      selected={selected}
      counter={counter}
      style={{ flex: 1 }}
    />
  );
};

export default GamePlay;
