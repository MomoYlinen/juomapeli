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
import PlayerItem from "../utils/playerItem";
import AddPlayer from "../utils/addPlayer";
import { LinearGradient } from "expo-linear-gradient";
import Logo1 from "../SvgImages/Logo";
import TextAnimator from "../components/TextAnimator";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { Feather } from "@expo/vector-icons";

const Home = ({ navigation }) => {
  const [players, setPlayers] = useState([]);
  const _onFinish = () => {
    // Alert.alert('Animation', 'It is done!');
  };

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
      <View style={styles.header}>
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}
        >
          <Logo1 style={{ marginBottom: 80 }} />
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.keyboardContainer}>
        <View style={styles.headerText}>
          <TextAnimator
            content="Ketkä juovat tänään?"
            textStyle={{
              fontSize: 24,
              textAlign: "center",
              color: "#6534B9",
              fontWeight: "bold",
              fontFamily: "Nunito_700Bold",
            }}
            duration={1000}
            onFinish={_onFinish}
          />
          <Text
            style={{
              fontSize: 16,
              textAlign: "center",
              color: "#6534B9",
              fontWeight: "bold",
              fontFamily: "Nunito_300Light",
            }}
          >
            {players.length >= 3
              ? "Hyvä! olet valmis aloittamaan"
              : "Tarvisemme vähintään kolme pelaajaa"}
          </Text>
        </View>
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
      <TouchableOpacity
        style={{
          flex: 1,
          backgroundColor: players.length >= 3 ? "#6534B9" : "#FCFCFC",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 100,
          marginVertical: 68,
          marginHorizontal: 100,
          shadowColor: players.length >= 3 ? "#171717" : "#FCFCFC",
          shadowOffset: players.length >= 3 ? { width: 1, height: 5 } : null,
          shadowOpacity: players.length >= 3 ? 0.4 : null,
          shadowRadius: players.length >= 3 ? 2 : null,
          paddingVertical: 12,
        }}
        onPress={players.length >= 3 ? pressHandler : null}
      >
        <View>
          <Text
            style={{
              fontSize: 20,
              textAlign: "center",
              fontWeight: "bold",
              color: "white",
              fontFamily: "Nunito_600SemiBold",
            }}
          >
            Valmis
          </Text>
        </View>
      </TouchableOpacity>
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
  header: {
    flex: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    flex: 1,
    alignItems: "center",
  },
  keyboardContainer: {
    flex: 7,
    paddingBottom: 30,
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
  button: {
    flex: 1,
    backgroundColor: "#6534B9",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    marginVertical: 68,
    marginHorizontal: 100,
    shadowColor: "#171717",
    shadowOffset: { width: 1, height: 5 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    paddingVertical: 12,
  },
});

export default Home;
