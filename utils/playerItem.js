import React from "react";
import { StyleSheet, Text, Button, View } from "react-native";

const PlayerItem = ({ item, handlePress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.item}>{item.player}</Text>
      </View>
      <View style={styles.button}>
        <Button onPress={() => handlePress(item.key)} title="X" color="white" />
      </View>
    </View>
  );
};

export default PlayerItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginTop: 10,
    marginHorizontal: 40,
  },
  item: {
    paddingVertical: 12,
    marginLeft: 60,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  content: {
    flex: 4,
    backgroundColor: "rgba(255, 255, 255,0.2)",
    borderBottomLeftRadius: 100,
    borderTopLeftRadius: 100,
    height: 50,
  },
  button: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255,0.2)",
    justifyContent: "center",
    borderBottomRightRadius: 100,
    borderTopRightRadius: 100,
  },
});
