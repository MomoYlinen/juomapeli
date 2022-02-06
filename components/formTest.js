import React from "react";
import { Button, TextInput, View } from "react-native";
import { Formik } from "formik";
import global from "../styles/global";

export const MyReactNativeForm = ({ addPlayer }) => (
  <Formik
    initialValues={{ player: "" }}
    onSubmit={(values) => {
      addPlayer(values);
    }}
  >
    {({ handleChange, handleBlur, handleSubmit, values }) => (
      <View>
        <TextInput
          style={global.input}
          onChangeText={handleChange("player")}
          onBlur={handleBlur("player")}
          value={values.player}
        />
        <Button onPress={handleSubmit} title="Submit" />
      </View>
    )}
  </Formik>
);
