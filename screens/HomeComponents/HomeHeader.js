import React from "react";
import { StyleSheet, View, TouchableWithoutFeedback } from "react-native";
import LottieView from "lottie-react-native";
import Logo1 from "../../SvgImages/Logo";

const HomeHeader = () => {
  return (
    <View style={styles.header}>
      <View style={styles.logo}>
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}
        >
          <Logo1 style={{ marginTop: 16 }} />
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.lottie}>
        <LottieView
          source={require("../../assets/lottie/HuikkaBottleAnim_Purple")}
          autoPlay={true}
          loop={true}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 5,
  },
  logo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  lottie: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeHeader;
