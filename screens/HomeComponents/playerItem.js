import React from "react";
import { StyleSheet, Text, Button, View, TouchableOpacity } from "react-native";
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

const PlayerItem = ({ item, handlePress }) => {
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
      <View style={styles.content}>
        <TouchableOpacity onPress={() => handlePress(item.key)}>
          <Text style={styles.item}>{item.player} X</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PlayerItem;

const styles = StyleSheet.create({
  container: {
    flex: 1 / 3,

    marginTop: 8,
    marginHorizontal: 8,
  },
  item: {
    paddingVertical: 8,
    textAlign: "center",
    fontSize: 12,
    fontWeight: "bold",
    color: "#6534B9",
    fontFamily: "Nunito_600SemiBold_Italic",
  },
  content: {
    flex: 1,
    backgroundColor: "#6534B91A",
    borderBottomLeftRadius: 100,
    borderTopLeftRadius: 100,
    borderBottomRightRadius: 100,
    borderTopRightRadius: 100,
    height: 30,
    shadowColor: "#171717",
    shadowOffset: { width: 5, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    flexDirection: "column",
    marginHorizontal: 0,
  },
});
