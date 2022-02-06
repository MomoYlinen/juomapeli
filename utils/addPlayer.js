import React, { useState } from "react";
import { StyleSheet, Text, TextInput, Button, View } from "react-native";

const AddPlayer = ({ submitHandler }) => {
  const [text, setText, textInput] = useState("");

  const changeHandler = (val) => {
    setText(val);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="New Player"
        onChangeText={changeHandler}
      />
      <Button
        onPress={() => submitHandler(text)}
        title="Add Player"
        color="green"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
});
export default AddPlayer;
