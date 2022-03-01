import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import PlayerItem from "../utils/playerItem";
import AddPlayer from "../utils/addPlayer";
import { LinearGradient } from "expo-linear-gradient";
import Logo1 from "../SvgImages/Logo";
import TextAnimator from "../components/TextAnimator";

const Home = ({ navigation }) => {
  const [players, setPlayers] = useState([]);
  const _onFinish = () => {
    // Alert.alert('Animation', 'It is done!');
  };

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
    <LinearGradient colors={["#FF5766", "#FFAD62"]} style={styles.background}>
      <View style={styles.header}>
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}
        >
          <Logo1 style={{ marginBottom: 30 }} />
        </TouchableWithoutFeedback>
      </View>
      <KeyboardAvoidingView
        style={styles.keyboardContainer}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.headerText}>
          <TextAnimator
            content="Ketkä juovat tänään?"
            textStyle={{
              fontSize: 30,
              textAlign: "center",
              color: "white",
              fontWeight: "bold",
            }}
            duration={1000}
            onFinish={_onFinish}
          />
        </View>
        <KeyboardAvoidingView style={styles.list}>
          <FlatList
            data={players}
            renderItem={({ item }) => (
              <PlayerItem item={item} handlePress={handlePress} />
            )}
          />
        </KeyboardAvoidingView>
        <KeyboardAvoidingView style={styles.addplayer}>
          <AddPlayer submitHandler={submitHandler} />
        </KeyboardAvoidingView>
      </KeyboardAvoidingView>
      <View style={styles.button}>
        <TouchableOpacity title="New Game" onPress={pressHandler}>
          <Text
            style={{
              fontSize: 20,
              textAlign: "center",
              fontWeight: "bold",
              color: "rgb(97, 97, 97)",
            }}
          >
            Aloita peli
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    left: 0,
    right: 0,
    top: 0,
    flex: 1,
  },
  header: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    flex: 1,
    alignItems: "center",
  },
  keyboardContainer: {
    flex: 8,
    paddingBottom: 70,
  },
  addplayer: {
    flex: 3,
    justifyContent: "center",
    marginBottom: 0,
  },
  list: {
    flex: 5,
    borderRadius: 10,
    marginBottom: 20,
    marginTop: 30,
  },
  button: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 100,
    marginVertical: 80,
    marginHorizontal: 110,
  },
});

export default Home;
