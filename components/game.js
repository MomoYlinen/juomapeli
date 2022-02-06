import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Button } from "react-native";

const Game = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Button
        onClick={props.handlerandomClick}
        title="Seuraava kysymys"
      ></Button>
      <Text>{props.selected}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Game;
