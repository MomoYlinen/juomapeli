import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useFonts } from "expo-font";
import { Nunito_600SemiBold } from "@expo-google-fonts/nunito";
import AppLoading from "expo-app-loading";

const ReadyButton = ({ playersLength, pressHandler }) => {
  let [fontsLoaded] = useFonts({
    Nunito_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        backgroundColor: playersLength >= 3 ? "#6534B9" : "#FCFCFC",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100,
        marginVertical: 68,
        marginHorizontal: 100,
        shadowColor: playersLength >= 3 ? "#171717" : "#FCFCFC",
        shadowOffset: playersLength >= 3 ? { width: 1, height: 5 } : null,
        shadowOpacity: playersLength >= 3 ? 0.4 : null,
        shadowRadius: playersLength >= 3 ? 2 : null,
        paddingVertical: 12,
      }}
      onPress={playersLength >= 3 ? pressHandler : null}
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
  );
};

const styles = StyleSheet.create({
  buttom: {
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

export default ReadyButton;
