import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Button } from "react-native";

const Game = (props) => {
  return (
    <SafeAreaView style={styles.item}>
      <Button
        onPress={props.handlerandomClick}
        title="Seuraava kysymys"
      ></Button>
      <Text>{props.selected}</Text>
    </SafeAreaView>
  );
};

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
export default Game;
