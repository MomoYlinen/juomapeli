import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/Home";
import Game from "../screens/Game";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: "",
    },
  },
  Game: {
    screen: Game,
    navigationOptions: {
      title: "",
      headerBackTitleVisible: false,
    },
  },
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#6534B9",
    headerTransparent: true,
    style: {
      backgroundColor: "transparent",
      borderTopWidth: 0,
      position: "absolute",
    },
  },
});

export default createAppContainer(HomeStack);
