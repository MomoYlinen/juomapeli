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
import SlotGame from "./GameComponents/SlotGame";
import NameSlot from "./GameComponents/NameSlot";
import SpinButton from "./GameComponents/SpinButton";
import { useFonts } from "expo-font";
import {
  Nunito_200ExtraLight,
  Nunito_200ExtraLight_Italic,
  Nunito_300Light,
  Nunito_300Light_Italic,
  Nunito_400Regular,
  Nunito_400Regular_Italic,
  Nunito_600SemiBold,
  Nunito_600SemiBold_Italic,
  Nunito_700Bold,
  Nunito_700Bold_Italic,
  Nunito_800ExtraBold,
  Nunito_800ExtraBold_Italic,
  Nunito_900Black,
  Nunito_900Black_Italic,
} from "@expo-google-fonts/nunito";
import { styles } from "./Gamestyles";

const GamePlay = ({ navigation, route }) => {
  let [fontsLoaded] = useFonts({
    Nunito_200ExtraLight,
    Nunito_200ExtraLight_Italic,
    Nunito_300Light,
    Nunito_300Light_Italic,
    Nunito_400Regular,
    Nunito_400Regular_Italic,
    Nunito_600SemiBold,
    Nunito_600SemiBold_Italic,
    Nunito_700Bold,
    Nunito_700Bold_Italic,
    Nunito_800ExtraBold,
    Nunito_800ExtraBold_Italic,
    Nunito_900Black,
    Nunito_900Black_Italic,
  });

  const [selected, setSelected] = useState();
  const [counter, setCounter] = useState(0);
  const [questionNumber, setQuestionNumber] = useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
    40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
  ]);
  const [startNewGame, setStartNewGame] = useState(true);
  const [playerOne, setPlayerOne] = useState("");
  const [playerTwo, setPlayerTwo] = useState("");
  const [neededPlayers, setNeededPlayers] = useState("");
  const [gameMode, setGameMode] = useState("");
  const [slotButton, setSlotButton] = useState(false);
  const [playerList, setPlayerList] = useState([]);
  const [turnCounter, setTurnCounter] = useState(0);

  const players = navigation.getParam("gamers");

  const backToMainMenu = () => {
    navigation.navigate("Home");
  };

  const spin = () => {
    setSlotButton(true);
  };

  const handlerandomClick = () => {
    setSlotButton(false);
    console.log(counter);
    console.log(playerList);
    console.log(turnCounter, "Laskuri");
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
    } else {
      let randomPlayerlist = players
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);

      setPlayerOne(playerList[turnCounter]);
      setPlayerTwo(playerList[turnCounter - 1]);
      if (turnCounter === 0) {
        setPlayerOne(playerList[turnCounter]);
        setPlayerTwo(playerList[turnCounter + 1]);
        console.log("Ollaan täällä");
      }
    }
    if (counter === 47) {
      setNeededPlayers("");
      setGameMode("End");
      setSelected("Peli on päättynyt");
      setCounter(0);
      return;
    }
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
      setTurnCounter(turnCounter + 1);
    }
    if (turnCounter == playerList.length - 1) {
      setTurnCounter(0);
      let shufflePlayerlist = playerList
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
      setPlayerList(shufflePlayerlist);
    }
  };

  if (startNewGame === true) {
    setStartNewGame(false);
    const playerNames = players.map((name) => {
      setPlayerList((prevplayerList) => {
        return [...prevplayerList, name.player];
      });
    });
    console.log(playerList);
    handlerandomClick();
  }

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  if (gameMode === "SlotGame") {
    const slotOptions = [
      "ANNA",
      "JUO",
      "ANNA",
      "JUO",
      "ANNA",
      "JUO",
      "ANNA",
      "JUO",
      "JAA",
      "JAA",
      "JAA",
      "JAA",
      "JAA",
      "JAA",
    ];

    const slotOptionsTwo = [
      1,1,1,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,5,5,5,5,5,6,6,6,6,2,6, 7,7,7, 8, 9, 10, 5, 7,6, 3, 2
    ];
    const randomOptions = getRandomInt(0, 13);
    const randomOptionsTwo = getRandomInt(0, 43);
    const randomOptionsThree = getRandomInt(0, playerList.length - 1);
    const suprise = slotOptions[randomOptions];
    const supriseTwo = slotOptionsTwo[randomOptionsTwo];
    const supriseThree = playerList[randomOptionsThree].toUpperCase();

    return (
      <View style={styles.container}>
        <Header style={styles.header} />
        <View style={styles.headerTop}>
          <View style={styles.headerBottom}>
            <View style={styles.headerBottomTextContainer}>
              <Text style={styles.headerBottomText}>Pyöräytä</Text>
            </View>
            <View style={styles.nameSlotContainer}>
              <NameSlot
                text={supriseThree}
                range="ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ"
                duration={3000}
                padding={supriseThree.length}
                width={supriseThree.length < 9 ? 50 : 28}
                height={supriseThree.length < 9 ? 50 : 28}
              />
            </View>
          </View>
          <View style={styles.nameSlot}>
            <View style={styles.slotGameName}>
              <SlotGame
                text={slotButton ? suprise : "XXXX"}
                range="ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ"
                duration={3000}
                delay={200}
                padding={4}
                width={50}
                height={80}
                initialAnimation={slotButton}
              />
            </View>
            <View style={styles.slotGameAction}>
              <SlotGame
                text={slotButton ? supriseTwo : ""}
                duration={1000}
                delay={1000}
                padding={2}
                width={50}
                height={80}
                initialAnimation={slotButton}
              />
            </View>
            <View style={styles.slotGameSpin}>
              <SpinButton handlerandomClick={spin} />
            </View>
          </View>
        </View>
        <GameButton style={{ flex: 1 }} handlerandomClick={handlerandomClick} />
      </View>
    );
  }

  if (gameMode === "BaseGame") {
    return (
      <View style={styles.baseGameContainer}>
        <Header style={styles.baseGameHeader} />
        <View style={styles.baseGame}>
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
      <View style={styles.colorGameContainer}>
        <Header style={styles.colorGameHeader} />
        <View style={styles.colorGame}>
          <ColorGame
            selected={selected}
            counter={counter}
            playerOne={neededPlayers}
            style={styles.colorGameText}
          />
        </View>
        <GameButton style={{ flex: 1 }} handlerandomClick={handlerandomClick} />
      </View>
    );
  }

  if (gameMode === "End") {
    return (
      <View style={styles.endGameContainer}>
        <Header style={styles.endGameHeader} />
        <View style={styles.endGame}>
          <GameEnding
            backToHome={backToMainMenu}
            handlerandomClick={handlerandomClick}
            style={styles.endGameOptions}
          />
        </View>
      </View>
    );
  }
};

export default GamePlay;
