import React, { useRef, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
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

const BaseGame = ({ backToHome, handlerandomClick }) => {
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

  Animated.timing(fadeAnim, {
    toValue: 0,
    duration: 10,
    useNativeDriver: true,
  }).start();

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
        <View style={{ flex: 2, justifyContent: "flex-end" }}>
          <Text
            style={{
              fontSize: 44,
              textAlign: "center",
              fontWeight: "bold",
              color: "#6534B9",
              fontFamily: "Nunito_700Bold",
              marginBottom: 94,
            }}
          >
            Peli on päättynyt
          </Text>
        </View>
        <View style={{ flex: 2, paddingBottom: 144 }}>
          <TouchableOpacity
            onPress={handlerandomClick}
            title="Seuraava kysymys"
            style={styles.button}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 32,
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "#fcfcfc",
                  fontFamily: "Nunito_700Bold",
                }}
              >
                Uusi Peli
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={backToHome}
            title="Seuraava kysymys"
            style={styles.button}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 32,
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "#fcfcfc",
                  fontFamily: "Nunito_700Bold",
                }}
              >
                Takaisin
              </Text>
            </View>
          </TouchableOpacity>
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
    paddingBottom: 24,
    marginTop: 50,
    justifyContent: "center",
  },
  button: {
    flex: 1,
    backgroundColor: "#6534B9",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    marginHorizontal: 24,
    marginTop: 64,
  },
});
export default BaseGame;
