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
import {
  Nunito_200ExtraLight,
  Nunito_200ExtraLight_Italic,
  Nunito_300Light,
  Nunito_300Light_Italic,
  Nunito_400Regular,
  Nunito_400Regular_Italic,
  Nunito_600SemiBold,
  Nunito_600SemiBold_Italic,
  Nunito_700Bold,
  Nunito_700Bold_Italic,
  Nunito_800ExtraBold,
  Nunito_800ExtraBold_Italic,
  Nunito_900Black,
  Nunito_900Black_Italic,
} from "@expo-google-fonts/nunito";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const AddPlayer = ({ submitHandler }) => {
  const [text, setText] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  let [fontsLoaded] = useFonts({
    Nunito_200ExtraLight,
    Nunito_200ExtraLight_Italic,
    Nunito_300Light,
    Nunito_300Light_Italic,
    Nunito_400Regular,
    Nunito_400Regular_Italic,
    Nunito_600SemiBold,
    Nunito_600SemiBold_Italic,
    Nunito_700Bold,
    Nunito_700Bold_Italic,
    Nunito_800ExtraBold,
    Nunito_800ExtraBold_Italic,
    Nunito_900Black,
    Nunito_900Black_Italic,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const changeHandler = (val) => {
    setText(val);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <View
          style={{
            borderColor: isFocused ? "#6534B9" : "white",
            borderWidth: isFocused ? 1 : 1,
            flex: 5,
            justifyContent: "center",
            color: "white",
            borderRadius: 100,
            marginHorizontal: 0,
            alignItems: "center",
            marginLeft: 16,
            marginRight: 8,
            shadowColor: isFocused ? "grey" : "#00000033",
            shadowOffset: isFocused
              ? { width: 2, height: 1 }
              : { width: 3, height: 2 },
            shadowOpacity: 0.9,
            shadowRadius: 1,
            backgroundColor: "white",
          }}
        >
          <TextInput
            style={styles.input}
            placeholderTextColor="grey"
            placeholder="Lisää pelaaja..."
            onChangeText={changeHandler}
            value={text}
            blurOnSubmit={true}
            maxLength={16}
            enablesReturnKeyAutomatically={true}
            keyboardAppearance="light"
            keyboardType="ascii-capable"
            onBlur={() => setIsFocused(false)}
            onFocus={() => setIsFocused(true)}
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
              style={{
                fontSize: 16,
                fontWeight: "bold",
                color: "white",
              }}
            >
              +
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontWeight: "bold",
    position: "relative",
    paddingBottom: 4,
    height: "auto",
  },
  inputWrapper: {
    flex: 1,
    flexDirection: "row",
    marginHorizontal: 24,
    marginVertical: 12,
    marginBottom: 94,
  },
  input: {
    borderColor: "white",
    backgroundColor: "transparent",
    fontWeight: "bold",
    fontSize: 14,
    color: "grey",
    marginTop: 0,
    flex: 1,
    fontFamily: "Nunito_600SemiBold_Italic",
  },
  inputcotainer: {
    flex: 5,
    justifyContent: "center",
    color: "white",
    borderRadius: 100,
    marginHorizontal: 0,
    alignItems: "center",
    marginLeft: 16,
    marginRight: 8,
    shadowColor: "#00000033",
    shadowOffset: { width: 6, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 1,
    backgroundColor: "white",
  },
  button: {
    flex: 1,
    backgroundColor: "#6534B9",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "white",
  },
});
export default AddPlayer;
