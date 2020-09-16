import React, { useState } from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Modal,
  StyleSheet,
} from "react-native";
import { globalStyles } from "../styles/global";
import Card from "../shared/Card";
import { MaterialIcons } from "@expo/vector-icons";

export default function Home({ navigation }) {
  const [Modall, setModall] = useState(false);
  const [games, setgames] = useState([
    { key: "1", title: "Tekken", rating: "2", body: "Lorem Ipsum oui ouiii!" },
    {
      key: "2",
      title: "Tekken 2",
      rating: "4",
      body: "Lorem Ipsum oui ouiii!",
    },
    {
      key: "3",
      title: "Tekken 3",
      rating: "5",
      body: "Lorem Ipsum oui ouiii!",
    },
    {
      key: "4",
      title: "Tekken 4",
      rating: "2",
      body: "Lorem Ipsum oui ouiii!",
    },
    {
      key: "5",
      title: "Tekken 5",
      rating: "4",
      body: "Lorem Ipsum oui ouiii!",
    },
    {
      key: "6",
      title: "Tekken 6",
      rating: "4",
      body: "Lorem Ipsum oui ouiii!",
    },
    {
      key: "7",
      title: "Tekken 7",
      rating: "4",
      body: "Lorem Ipsum oui ouiii!",
    },
  ]);

  const pressHandler = () => {
    navigation.navigate("ReviewDetails");
  };
  return (
    <ImageBackground
      source={require("../assets/bg.png")}
      style={globalStyles.cont}
    >
      <Modal visible={Modall} animationType="slide">
        <View style={styles.modelContent}>
          <MaterialIcons
            name="close"
            size={30}
            color="white"
            onPress={() => setModall(false)}
            style={{ ...styles.modal, ...styles.modalClose }}
          />
          <Text> Halo from Modal!!! </Text>
        </View>
      </Modal>
      <MaterialIcons
        name="add"
        size={30}
        color="white"
        onPress={() => setModall(true)}
        style={styles.modal}
      />
      <FlatList
        data={games}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ReviewDetails", item)}
          >
            <Card>
              <Text style={globalStyles.textHeading}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  modal: {
    borderWidth: 2,
    marginBottom: 10,
    borderColor: "white",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
    opacity: 0.7,
  },
  modalClose: {
    backgroundColor: "#990000",
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
  },
});
