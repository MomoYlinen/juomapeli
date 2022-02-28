import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Logo1 from "../SvgImages/Logo";

const Game = (props) => {
  return (
    <LinearGradient colors={["#FF5766", "#FFAD62"]} style={styles.background}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Logo1 style={{ marginLeft: 160 }} />
        </View>
        <View style={styles.content}>
          <View style={styles.textWrapper}>
            <Text
              style={{
                fontSize: 40,
                textAlign: "center",
                fontWeight: "bold",
                color: "white",
              }}
            >
              {props.selected}
            </Text>
          </View>
        </View>
        <View style={styles.button}>
          <TouchableOpacity
            onPress={props.handlerandomClick}
            title="Seuraava kysymys"
          >
            <Text
              style={{
                fontSize: 20,
                textAlign: "center",
                marginBottom: 0,
                color: "black",
                fontWeight: "bold",
              }}
            >
              {props.counter < 1 || props.counter > 33
                ? "Aloita Uusi Peli "
                : "Seuraava Kysymys"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    left: 0,
    right: 0,
    top: 0,
    flex: 1,
  },
  header: {
    flex: 1,
    marginTop: 50,
  },
  content: {
    flex: 7,
  },
  button: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 100,
    marginVertical: 80,
    marginHorizontal: 80,
  },
  textWrapper: {
    flex: 1,
    marginHorizontal: 10,
    marginBottom: 0,
    marginTop: 50,
    justifyContent: "center",
    borderRadius: 10,
  },
});
export default Game;
