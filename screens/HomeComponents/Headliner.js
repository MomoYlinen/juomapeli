import React from "react";
import { View, StyleSheet, Text } from "react-native";
import TextAnimator from "../../components/TextAnimator";
import { Nunito_700Bold, Nunito_300Light } from "@expo-google-fonts/nunito";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const Headliner = ({ playersLength }) => {
  const _onFinish = () => {
    // Alert.alert('Animation', 'It is done!');
  };

  let [fontsLoaded] = useFonts({
    Nunito_300Light,
    Nunito_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={styles.headerText}>
      <TextAnimator
        content="Ketkä juovat tänään?"
        textStyle={{
          fontSize: 24,
          textAlign: "center",
          color: "#6534B9",
          fontWeight: "bold",
          fontFamily: "Nunito_700Bold",
        }}
        duration={1000}
        onFinish={_onFinish}
      />
      <Text
        style={{
          fontSize: 16,
          textAlign: "center",
          color: "#6534B9",
          fontWeight: "bold",
          fontFamily: "Nunito_300Light",
        }}
      >
        {playersLength >= 3
          ? "Hyvä! olet valmis aloittamaan"
          : "Tarvisemme vähintään kolme pelaajaa"}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerText: {
    flex: 1,
    alignItems: "center",
  },
});

export default Headliner;
