import React from "react";
import { StyleSheet, Text, View } from "react-native";
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
    <View style={styles.container}>
      <View style={styles.textWrapper}>
        <Text
          style={{
            fontSize: 50,
            textAlign: "center",
            fontWeight: "bold",
            color: "#6534B9",
            fontFamily: "Nunito_700Bold",
          }}
        >
          {props.selected}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 7,
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
