import React, { useRef } from "react";
import { StyleSheet, Text, View, Animated } from "react-native";
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

const BaseGame = (props) => {
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

  const fadeAnim = useRef(new Animated.Value(0)).current;

  // Will change fadeAnim value to 1 in 5 seconds
  Animated.timing(fadeAnim, {
    toValue: 1,
    duration: 500,
    useNativeDriver: true,
  }).start();

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Animated.View style={{ flex: 7, opacity: fadeAnim }}>
      <View style={styles.textWrapper}>
        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          <Text
            style={{
              fontSize: 32,
              textAlign: "center",
              fontWeight: "bold",
              color: "#6534B9",
              fontFamily: "Nunito_700Bold",
              marginBottom: 32,
            }}
          >
            {props.playerOne}
          </Text>
        </View>
        <View style={{ flex: 2 }}>
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
    </Animated.View>
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
export default BaseGame;
