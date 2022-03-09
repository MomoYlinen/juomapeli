import { StyleSheet, LogBox } from "react-native";
import React from "react";
import Navigator from "./routes/HomeStack";

export default function App() {
  LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
  ]);

  return <Navigator style={styles.container} />;
}

const styles = StyleSheet.create({});
