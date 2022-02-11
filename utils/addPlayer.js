import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  Button,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

const AddPlayer = ({ submitHandler }) => {
  const [text, setText] = useState("");

  const changeHandler = (val) => {
    setText(val);
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
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
            value={text}
          />
        </View>
        <View style={styles.button}>
          <TouchableOpacity
            onPress={() => {
              {
                submitHandler(text), setText("");
              }
            }}
            color="white"
          >
            <Text
              style={{ fontSize: 20, textAlign: "center", fontWeight: "bold" }}
            >
              Lisää pelaaja
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
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
    backgroundColor: "rgba(250, 222, 10,1.0)",
    justifyContent: "center",
    borderTopRightRadius: 3,
    borderTopLeftRadius: 3,
    marginLeft: 50,
    marginRight: 50,
    marginBottom: 20,
  },
});
export default AddPlayer;
