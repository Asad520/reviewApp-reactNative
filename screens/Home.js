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
import uuid from "uuid";
import { globalStyles } from "../styles/global";
import Card from "../shared/Card";
import ReviewForm from "./ReviewForm";
import { MaterialIcons } from "@expo/vector-icons";

export default function Home({ navigation }) {
  const [Modall, setModall] = useState(false);
  const [games, setgames] = useState([
    {
      key: "2",
      title: "GTA V",
      rating: "4",
      body: "Lorem Ipsum oui ouiii!",
    },
    { key: "1", title: "Tekken", rating: "2", body: "Lorem Ipsum oui ouiii!" },
    {
      key: "3",
      title: "Tekken 3",
      rating: "5",
      body: "Lorem Ipsum oui ouiii!",
    },
    {
      key: "7",
      title: "Tekken 7",
      rating: "4",
      body: "Lorem Ipsum oui ouiii!",
    },
  ]);
  const addReview = (review) => {
    let tempRev = {
      body: review.body.trim(),
      title: review.title.trim(),
      rating: review.rating.trim(),
      id: uuid(),
    };
    setgames((prevReviews) => {
      return [tempRev, ...prevReviews];
    });
    setModall(false);
  };
  return (
    <ImageBackground
      source={require("../assets/bg.png")}
      style={globalStyles.cont}
    >
      <Modal visible={Modall} animationType="slide">
        <View style={styles.modalContent}>
          <ReviewForm setModall={setModall} addReview={addReview} />
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
    backgroundColor: "maroon",
    marginBottom: 0,
    opacity: 1,
  },
  modalContent: {
    flex: 1,
    backgroundColor: "maroon",
  },
});
