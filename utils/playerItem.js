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
          color={"rgb(179, 0, 0)"}
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
    backgroundColor: "rgba(250, 222, 107,1.0)",
    marginTop: 7,
  },
  button: {
    flex: 1,
    backgroundColor: "rgb(97, 97, 97)",
    justifyContent: "center",
    marginTop: 7,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
});
