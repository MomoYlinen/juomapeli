import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import LottieView from "lottie-react-native";
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
import Logo1 from "../SvgImages/Logo";
import TextAnimator from "../components/TextAnimator";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import ReadyButton from "./HomeComponents/ReadyButton";

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
        <View style={styles.logo}>
          <TouchableWithoutFeedback
            onPress={() => {
              Keyboard.dismiss();
            }}
          >
            <Logo1 style={{ marginTop: 16 }} />
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.lottie}>
          <LottieView
            source={require("../assets/lottie/HuikkaBottleAnim_Purple")}
            autoPlay={true}
            loop={true}
          />
        </View>
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
  header: {
    flex: 5,
  },
  logo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  lottie: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    flex: 1,
    alignItems: "center",
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
