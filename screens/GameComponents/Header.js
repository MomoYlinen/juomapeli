import React from "react";
import Logo1 from "../../SvgImages/Logo";
import { View, StyleSheet } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Logo1 style={{ marginTop: 48 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Header;
