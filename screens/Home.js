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
          <Logo1 style={{ marginBottom: 64 }} />
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.keyboardContainer}>
        <View style={styles.headerText}>
          <TextAnimator
            content="Ketkä juovat tänään?"
            textStyle={{
              fontSize: 30,
              textAlign: "center",
              color: "#6534B9",
              fontWeight: "bold",
              fontFamily: "Lobster_400Regular",
            }}
            duration={1000}
            onFinish={_onFinish}
          />
        </View>
        <View style={styles.addplayerWrapper}>
          <FlatList
            columnWrapperStyle={{ justifyContent: "center" }}
            contentContainerStyle={{ marginHorizontal: 16 }}
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
      <TouchableOpacity style={styles.button} onPress={pressHandler}>
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
    paddingBottom: 70,
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
