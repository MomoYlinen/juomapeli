import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
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

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
    setClickedRight(false);
    setClickedLeft(false);
  }, [props.playerOne]);

  const handleRightClick = () => {
    console.log("clicked1");
    let questionRight = Questions();
    setRightClick(questionRight);
  };

  const rightCombine = () => {
    setClickedRight(true);
    handleRightClick();
  };

  const handleLeftClick = () => {
    let questionLeft = Questions();
    setLeftClick(questionLeft);
  };

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Animated.View
      style={{ flex: 7, backgroundColor: "#FCFCFC", opacity: fadeAnim }}
    >
      <View style={styles.textWrapper}>
        <Text
          style={{
            fontSize: 30,
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
            fontSize: 40,
            textAlign: "center",
            fontWeight: "bold",
            color: "#6534B9",
            fontFamily: "Nunito_700Bold",
            marginTop: 48,
          }}
        >
          Valitse väri
        </Text>
      </View>
      <View style={styles.buttonWrapper}>
        <View
          style={{
            flex: 1,
            borderWidth: 2,
            borderColor: "#4166b5",
            marginRight: 6,
          }}
          opacity={clickedRight ? 0.3 : 1}
        >
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
                fontSize: 16,
                marginTop: "30%",
                marginHorizontal: 4,
              }}
            >
              {leftClick}
            </Text>
          ) : (
            <TouchableOpacity
              onPress={() => {
                setClickedLeft(clickedRight ? null : true), handleLeftClick();
              }}
              style={{
                flex: 1,
                backgroundColor: "#4166b5",
                justifyContent: "center",
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
        <View
          style={{
            flex: 1,
            borderWidth: 2,
            borderColor: "#e62727",
            marginLeft: 6,
            justifyContent: "center",
          }}
          opacity={clickedLeft ? 0.3 : 1}
        >
          {clickedRight ? (
            <Text
              style={{
                flex: 1,
                backgroundColor: "#FCFCFC",
                textAlign: "center",
                color: "#6534B9",
                fontFamily: "Nunito_700Bold",
                fontSize: 16,
                marginTop: "30%",
                marginHorizontal: 4,
              }}
            >
              {rightClick}
            </Text>
          ) : (
            <TouchableOpacity
              onPress={() => {
                setClickedRight(clickedLeft ? null : true), handleRightClick();
              }}
              style={{
                flex: 1,
                backgroundColor: "#e62727",
                justifyContent: "center",
                alignItems: "center",
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
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 7,
    backgroundColor: "#FCFCFC",
  },
  textWrapper: {
    flex: 2,
    marginHorizontal: 16,
    marginBottom: 8,
    marginTop: 50,
    justifyContent: "center",
  },
  buttonWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 16,
    marginBottom: 32,
  },
});
export default ColorGame;
