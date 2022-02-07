import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";
import React, { useState } from "react";
import Header from "./utils/header";
import PlayerItem from "./utils/playerItem";
import AddPlayer from "./utils/addPlayer";
import Game from "./components/game";
import lisaaPelaaja from "./questions/testquestions";

export default function App() {
  const [players, setPlayers] = useState([]);
  const [selected, setSelected] = useState("");

  const handlePress = (key) => {
    setPlayers((prevPlayers) => {
      return prevPlayers.filter((item) => item.key != key);
    });
  };

  const submitHandler = (text) => {
    setPlayers((prevPlayers) => {
      return [...prevPlayers, { player: text, key: Math.random().toString() }];
    });
  };

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
    <View style={styles.container}>
      <Header />
      <View style={styles.content}></View>
      <AddPlayer submitHandler={submitHandler} />
      <View style={styles.list}>
        {/* <FlatList
          data={players}
          renderItem={({ item }) => (
            <PlayerItem item={item} handlePress={handlePress} />
          )} */}
        <Game handlerandomClick={handlerandomClick} selected={selected} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
