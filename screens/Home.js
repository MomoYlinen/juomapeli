import { StyleSheet, Text, View, FlatList } from "react-native";
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
import { Lobster_400Regular } from "@expo-google-fonts/lobster";
import React, { useState } from "react";
import PlayerItem from "./HomeComponents/playerItem";
import AddPlayer from "./HomeComponents/addPlayer";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import ReadyButton from "./HomeComponents/ReadyButton";
import HomeHeader from "./HomeComponents/HomeHeader";
import Headliner from "./HomeComponents/Headliner";

const Home = ({ navigation }) => {
  const [players, setPlayers] = useState([]);

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
    Lobster_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const handlePress = (key) => {
    setPlayers((prevPlayers) => {
      return prevPlayers.filter((item) => item.key != key);
    });
  };

  const submitHandler = (text) => {
    if (text.length > 3) {
      setPlayers((prevPlayers) => {
        return [
          ...prevPlayers,
          { player: text, key: Math.random().toString() },
        ];
      });
    }
  };

  const pressHandler = () => {
    navigation.navigate("Game", { gamers: players });
  };

  return (
    <View style={styles.background}>
      <HomeHeader style={{ flex: 5 }} />
      <View style={styles.keyboardContainer}>
        <Headliner style={{ flex: 1 }} playersLength={players.length} />
        <View style={styles.addplayerWrapper}>
          <FlatList
            columnWrapperStyle={{ justifyContent: "center" }}
            contentContainerStyle={{ marginHorizontal: 64 }}
            style={styles.list}
            data={players}
            keyExtractor={(item) => item.key}
            numColumns={3}
            horizontal={false}
            renderItem={({ item }) => (
              <PlayerItem
                item={item}
                handlePress={handlePress}
                style={styles.addplayer}
              />
            )}
          />
          <AddPlayer submitHandler={submitHandler} />
        </View>
      </View>
      <ReadyButton
        style={{ flex: 1 }}
        pressHandler={pressHandler}
        playersLength={players.length}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    backgroundColor: "#FCFCFC",
  },
  keyboardContainer: {
    flex: 6,
    paddingBottom: 10,
  },
  addplayerWrapper: {
    flex: 9,
  },
  addplayer: {
    justifyContent: "center",
    minHeight: "60%",
  },
  list: {
    marginBottom: 0,
    marginTop: 24,
    maxHeight: "40%",
    marginHorizontal: 8,
  },
});

export default Home;
