import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const GameButton = ({ handlerandomClick }) => {
  return (
    <TouchableOpacity
      onPress={handlerandomClick}
      title="Seuraava kysymys"
      style={styles.button}
    >
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <AntDesign name="right" size={80} color="white" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    backgroundColor: "#6534B9",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    marginVertical: 68,
    marginHorizontal: "37%",
    paddingVertical: 12,
  },
});

export default GameButton;
