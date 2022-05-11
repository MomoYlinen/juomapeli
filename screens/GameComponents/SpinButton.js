import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { Fontisto } from "@expo/vector-icons";

const GameButton = ({ handlerandomClick }) => {
  return (
    <TouchableOpacity
      onPress={handlerandomClick}
      title="Seuraava kysymys"
      style={styles.button}
    >
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Fontisto name="spinner-rotate-forward" size={32} color="#6534B9" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    backgroundColor: "#FCFCFC",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 6,
    borderWidth: 1,
    borderRadius: 10,
  },
});

export default GameButton;
