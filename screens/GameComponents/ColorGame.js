import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
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
import Questions from "../../questions/testquestions2";

const ColorGame = (props) => {
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
  const [rightClick, setRightClick] = useState("Oikea");
  const [leftClick, setLeftClick] = useState("Vasen");
  const [clickedRight, setClickedRight] = useState(false);
  const [clickedLeft, setClickedLeft] = useState(false);

  const handleRightClick = () => {
    console.log("clicked1");
    let questionRight = Questions();
    setRightClick(questionRight);
  };

  const handleLeftClick = () => {
    let questionLeft = Questions();
    setLeftClick(questionLeft);
  };

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.textWrapper}>
        <Text
          style={{
            fontSize: 24,
            textAlign: "center",
            fontWeight: "bold",
            color: "#6534B9",
            fontFamily: "Nunito_700Bold",
          }}
        >
          {props.playerOne}
        </Text>
        <Text
          style={{
            fontSize: 30,
            textAlign: "center",
            fontWeight: "bold",
            color: "#6534B9",
            fontFamily: "Nunito_700Bold",
          }}
        >
          Valitse väri
        </Text>
      </View>
      <View style={styles.buttonWrapper}>
        {clickedLeft ? (
          <Text
            style={{
              flex: 1,
              backgroundColor: "#FCFCFC",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              color: "#6534B9",
              fontFamily: "Nunito_700Bold",
              fontSize: 30,
              marginRight: 12,
            }}
          >
            {leftClick}
          </Text>
        ) : (
          <TouchableOpacity
            onPress={() => {
              setClickedLeft(true), handleLeftClick();
            }}
            style={{
              flex: 1,
              backgroundColor: "#4166b5",
              justifyContent: "center",
              marginRight: 12,
            }}
          >
            <Text
              style={{
                flex: 1,
              }}
            ></Text>
          </TouchableOpacity>
        )}
        {clickedRight ? (
          <Text
            style={{
              flex: 1,
              backgroundColor: "#FCFCFC",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              color: "#6534B9",
              fontFamily: "Nunito_700Bold",
              fontSize: 30,
              marginLeft: 12,
            }}
          >
            {rightClick}
          </Text>
        ) : (
          <TouchableOpacity
            onPress={() => {
              setClickedRight(true), handleRightClick();
            }}
            style={{
              flex: 1,
              backgroundColor: "#eb623f",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: 12,
            }}
          >
            <Text
              style={{
                flex: 1,
              }}
            ></Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 7,
    backgroundColor: "#FCFCFC",
  },
  textWrapper: {
    flex: 1,
    marginHorizontal: 20,
    marginBottom: 0,
    marginTop: 50,
    justifyContent: "center",
    paddingVertical: 64,
  },
  buttonWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 16,
  },
});
export default ColorGame;
