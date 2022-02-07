import React from "react";
import { StyleSheet, Text, Button, View } from "react-native";

const PlayerItem = ({ item, handlePress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.item}>{item.player}</Text>
      </View>
      <View style={styles.button}>
        <Button
          onPress={() => handlePress(item.key)}
          title="X"
          color={"black"}
        />
      </View>
    </View>
  );
};

export default PlayerItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 20,
  },
  item: {
    padding: 16,
    margin: 10,
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
  },
  content: {
    flex: 4,
    backgroundColor: "rgba(157, 163, 155,0.9)",
    marginTop: 7,
  },
  button: {
    flex: 1,
    backgroundColor: "rgba(166, 28, 28,0.9)",
    justifyContent: "center",
    marginTop: 7,
  },
});
