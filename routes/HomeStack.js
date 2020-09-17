import { createStackNavigator } from "react-navigation-stack";
import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";
import React from "react";
import Header from "../shared/Header";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      header: ({ navigation }) => (
        <Header navigation={navigation} title="GameZone" />
      ),
    },
  },
  ReviewDetails: {
    screen: ReviewDetails,

    navigationOptions: {
      title: "Game Review",
      headerTitleAlign: "center",
      headerStyle: {
        backgroundColor: "maroon",
        height: 110,
      },
    },
  },
};
const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: "transparent",
      height: 90,
    },
  },
});

export default HomeStack;
