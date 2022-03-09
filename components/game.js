import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Logo1 from "../SvgImages/Logo";
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
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const Game = (props) => {
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

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <LinearGradient colors={["#FF5766", "#FFAD62"]} style={styles.background}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Logo1 style={{ marginTop: 55 }} />
        </View>
        <View style={styles.content}>
          <View style={styles.textWrapper}>
            <Text
              style={{
                fontSize: 50,
                textAlign: "center",
                fontWeight: "bold",
                color: "white",
                fontFamily: "Nunito_700Bold",
              }}
            >
              {props.selected}
            </Text>
          </View>
        </View>
        <View style={styles.button}>
          <TouchableOpacity
            onPress={props.handlerandomClick}
            title="Seuraava kysymys"
          >
            <Text
              style={{
                fontSize: 20,
                textAlign: "center",
                marginBottom: 0,
                color: "black",
                fontWeight: "bold",
                fontFamily: "Nunito_400Regular",
              }}
            >
              {props.counter < 1 || props.counter > 33
                ? "Aloita Uusi Peli "
                : "Seuraava Kysymys"}
            </Text>
          </TouchableOpacity>
        </View>
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
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flex: 7,
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
    marginHorizontal: 80,
  },
  textWrapper: {
    flex: 1,
    marginHorizontal: 20,
    marginBottom: 0,
    marginTop: 50,
    justifyContent: "center",
  },
});
export default Game;
