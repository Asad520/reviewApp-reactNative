import React from "react";
import {
  TextInput,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { globalStyles } from "../styles/global";
import { Formik } from "formik";

export default function ReviewForm() {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ImageBackground
        source={require("../assets/bg.png")}
        style={globalStyles.cont}
      >
        <Formik
          initialValues={{ title: "", body: "", rating: "" }}
          onSubmit={(values) => console.log(values)}
        >
          {(props) => (
            <View>
              <TextInput
                placeholder="Review Title..."
                onChangeText={props.handleChange("title")}
                value={props.values.title}
                style={globalStyles.input}
              />
              <TextInput
                multiline
                placeholder="Review Body..."
                onChangeText={props.handleChange("body")}
                value={props.values.body}
                style={globalStyles.input}
              />
              <TextInput
                placeholder="Rating (1-5)..."
                onChangeText={props.handleChange("rating")}
                value={props.values.rating}
                style={globalStyles.input}
                keyboardType="numbers-and-punctuation"
              />
              <TouchableOpacity onPress={props.handleSubmit} style={styles.but}>
                <Text
                  style={{ color: "white", fontSize: 20, paddingVertical: 10 }}
                >
                  Submit Review!
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  but: {
    borderRadius: 20,
    borderColor: "white",
    borderWidth: 2,
    marginTop: "12%",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "maroon",
    width: "75%",
    alignSelf: "center",
  },
});
