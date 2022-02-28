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
        <View style={styles.inputWrapper}>
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
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                +
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.inputcotainer}>
            <TextInput
              style={styles.input}
              placeholderTextColor="white"
              placeholder="Kirjoita nimi"
              onChangeText={changeHandler}
              value={text}
            />
          </View>
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
  inputWrapper: {
    flex: 1,
    flexDirection: "row",
    borderWidth: 1,
    marginLeft: 60,
    marginRight: 60,
    marginVertical: 30,
    borderRadius: 100,
    borderColor: "white",
  },
  input: {
    borderColor: "white",
    backgroundColor: "transparent",
    fontWeight: "bold",
    fontSize: 15,
    color: "white",
    marginTop: 5,
  },
  inputcotainer: {
    flex: 2,
    justifyContent: "center",
    color: "white",
  },
  button: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 15,
  },
});
export default AddPlayer;
