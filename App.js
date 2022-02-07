import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";
import React from "react";
import Navigator from "./routes/HomeStack";

export default function App() {
  return <Navigator style={styles.container} />;
}

const styles = StyleSheet.create({});
