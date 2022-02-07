import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  Button,
  View,
  TouchableOpacity,
} from "react-native";

const AddPlayer = ({ submitHandler }) => {
  const [text, setText, textInput] = useState("");

  const changeHandler = (val) => {
    setText(val);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text
          style={{
            fontSize: 30,
            textAlign: "center",
            fontWeight: "bold",
            marginTop: 10,
            color: "white",
          }}
        >
          {" "}
          Kirjoita Pelaajan nimi
        </Text>
      </View>
      <View style={styles.inputcotainer}>
        <TextInput
          style={styles.input}
          placeholder="Kirjoita nimi"
          onChangeText={changeHandler}
        />
      </View>
      <View style={styles.button}>
        <TouchableOpacity onPress={() => submitHandler(text)} color="white">
          <Text
            style={{ fontSize: 20, textAlign: "center", fontWeight: "bold" }}
          >
            Add Player
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontWeight: "bold",
  },
  header: {
    flex: 2,
    justifyContent: "center",
    marginTop: 20,
  },
  input: {
    marginBottom: 0,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderBottomColor: "black",
    backgroundColor: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
  inputcotainer: {
    flex: 2,
    justifyContent: "center",
    padding: 30,
  },
  button: {
    flex: 1,
    backgroundColor: "#E38201",
    justifyContent: "center",
    borderTopRightRadius: 3,
    borderTopLeftRadius: 3,
    marginLeft: 50,
    marginRight: 50,
    marginBottom: 20,
  },
});
export default AddPlayer;
