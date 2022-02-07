import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const Game = (props) => {
  return (
    <ImageBackground
      style={styles.container}
      source={require("../images/Gamescreen2.jpg")}
    >
      <View style={styles.content}>
        <View style={styles.textWrapper}>
          <Text
            style={{
              fontSize: 40,
              textAlign: "center",
              fontWeight: "bold",
              color: "black",
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
          <Text style={{ fontSize: 30, textAlign: "center" }}>
            Seuraava kysymys
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 7,
  },
  button: {
    flex: 1,
    backgroundColor: "red",
    justifyContent: "center",
  },
  textWrapper: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 70,
    marginTop: 50,
    justifyContent: "center",
    borderRadius: 10,
    opacity: 80,
  },
});
export default Game;
