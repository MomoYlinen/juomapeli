import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/Home";
import Game from "../screens/Game";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: "Uusi peli",
    },
  },
  Game: {
    screen: Game,
    navigationOptions: {
      title: "Juomapeli",
    },
  },
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: "black",
    },
  },
});

export default createAppContainer(HomeStack);
