import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import PlayerItem from "../utils/playerItem";
import AddPlayer from "../utils/addPlayer";

const Home = ({ navigation }) => {
  const [players, setPlayers] = useState([]);

  const handlePress = (key) => {
    setPlayers((prevPlayers) => {
      return prevPlayers.filter((item) => item.key != key);
    });
  };

  const submitHandler = (text) => {
    if (text.length > 3) {
      setPlayers((prevPlayers) => {
        return [
          { player: text, key: Math.random().toString() },
          ...prevPlayers,
        ];
      });
    }
  };

  const pressHandler = () => {
    navigation.navigate("Game", { gamers: players });
  };

  return (
    <ImageBackground
      source={require("../images/HomeScreen.jpg")}
      style={styles.container}
    >
      <View style={styles.addplayer}>
        <AddPlayer submitHandler={submitHandler} />
      </View>
      <View style={styles.list}>
        <FlatList
          data={players}
          renderItem={({ item }) => (
            <PlayerItem item={item} handlePress={handlePress} />
          )}
        />
      </View>
      <View style={styles.button}>
        <TouchableOpacity title="New Game" onPress={pressHandler}>
          <Text
            style={{
              fontSize: 30,
              textAlign: "center",
              fontWeight: "bold",
              color: "rgb(97, 97, 97)",
            }}
          >
            Aloita peli
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  addplayer: {
    flex: 4,
    justifyContent: "center",
    padding: 0,
  },
  list: {
    flex: 4,
    borderRadius: 10,
  },
  button: {
    flex: 1,
    backgroundColor: "rgba(250, 222, 107,0.8)",
    justifyContent: "center",
  },
});

export default Home;
