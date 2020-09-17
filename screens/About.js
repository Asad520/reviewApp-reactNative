import React from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import { globalStyles } from "../styles/global";
import { FontAwesome } from "@expo/vector-icons";
import * as Linking from "expo-linking";

const txt = "This app is built by \n\n    A SAD Devs ©™";
export default function About() {
  return (
    <ImageBackground
      source={require("../assets/bg.png")}
      style={globalStyles.cont}
    >
      <Text style={styles.head}>ABOUT PAGE</Text>
      <Text style={styles.text}>{txt}</Text>
      <Text style={styles.contact}>Contact Us:</Text>
      <View style={styles.iconView}>
        <FontAwesome
          name="instagram"
          style={styles.icons}
          color="white"
          size={40}
          onPress={() =>
            Linking.openURL("https://www.instagram.com/asadbutt05")
          }
        />
        <FontAwesome
          name="facebook-square"
          style={styles.icons}
          color="white"
          size={40}
          onPress={() =>
            Linking.openURL("https://www.facebook.com/frozenRobot1")
          }
        />
        <FontAwesome
          name="twitter-square"
          style={styles.icons}
          color="white"
          size={40}
          onPress={() =>
            Linking.openURL("https://www.twitter.com/frozenRobot05")
          }
        />
        <FontAwesome
          name="github-square"
          style={styles.icons}
          color="white"
          size={40}
          onPress={() => Linking.openURL("https://www.github.com/Asad520")}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  head: {
    fontFamily: "ArchitectsDaughter-Regular",
    fontSize: 40,
    color: "#f9aeae",
    alignSelf: "center",
  },
  text: {
    color: "white",
    letterSpacing: 3,
    fontSize: 25,
    alignSelf: "center",
    marginVertical: "20%",
    borderColor: "white",
    borderTopWidth: 2,
    borderBottomWidth: 2,
    paddingVertical: 40,
  },
  iconView: {
    flexDirection: "row",
    alignSelf: "center",
  },
  icons: {
    marginHorizontal: 10,
  },
  contact: {
    letterSpacing: 10,
    color: "white",
    alignSelf: "center",
    paddingVertical: 25,
    fontWeight: "bold",
    fontSize: 20,
  },
});
