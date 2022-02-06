import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const PlayerItem = ({ item, handlePress }) => {
  return (
    <TouchableOpacity onPress={() => handlePress(item.key)}>
      <Text style={styles.item}>{item.player}</Text>
    </TouchableOpacity>
  );
};

export default PlayerItem;

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 10,
    textAlign: "center",
  },
});
