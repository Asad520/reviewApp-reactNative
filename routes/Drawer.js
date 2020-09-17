import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";

import AboutStack from "./AboutStack";
import HomeStack from "./HomeStack";

const RootDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeStack,
    },
    About: {
      screen: AboutStack,
    },
  },
  {
    drawerBackgroundColor: "#4d0000",
    drawerType: "slide",
    drawerWidth: "60%",

    contentOptions: {
      activeBackgroundColor: "maroon",
      itemStyle: {
        alignSelf: "center",
        marginVertical: 20,
      },
      activeLabelStyle: {
        color: "white",
        fontSize: 40,
        borderTopWidth: 3,
        borderBottomWidth: 3,
        borderColor: "white",
        paddingVertical: 18,
        paddingHorizontal: "17%",
      },
      inactiveLabelStyle: {
        color: "white",
        fontSize: 20,
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderColor: "white",
        paddingVertical: 10,
        paddingHorizontal: 40,
      },
    },
  }
);

export default createAppContainer(RootDrawerNavigator);
