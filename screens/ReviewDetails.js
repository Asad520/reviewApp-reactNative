import React from "react";
import { View, Text, Image, StyleSheet, ImageBackground } from "react-native";
import { globalStyles, images } from "../styles/global";
import Card from "../shared/Card";

export default function ReviewDetails({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("Home");
  };
  return (
    <ImageBackground
      source={require("../assets/bg.png")}
      style={globalStyles.cont}
    >
      <View style={{ marginTop: 100 }}>
        <Card>
          <Text style={{ ...styles.text, paddingTop: 20 }}>
            TITLE: {navigation.getParam("title")}{" "}
          </Text>
          <Text style={styles.text}>ABOUT: {navigation.getParam("body")} </Text>
          <View style={styles.rate}>
            <Text style={{ fontSize: 17, fontWeight: "bold" }}>
              GameZone Rating:
            </Text>
            <Image source={images.ratings[navigation.getParam("rating")]} />
          </View>
        </Card>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  rate: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 16,
    marginVertical: 16,
    paddingHorizontal: 20,
    borderTopWidth: 3,
    borderBottomWidth: 3,
    borderLeftWidth: 3,
    borderRightWidth: 3,
    borderTopLeftRadius: 16,
    borderBottomRightRadius: 16,
    borderColor: "#4d0000",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
