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
  KeyboardAvoidingView,
} from "react-native";
import * as yup from "yup";
import { globalStyles } from "../styles/global";
import { MaterialIcons } from "@expo/vector-icons";
import { Formik } from "formik";

const ReviewSchema = yup.object({
  title: yup
    .string()
    .required("Title Required!")
    .test("isText3 ", "Must be at least 3 characters", (value) => {
      if (value) return value.replace(/\s/g, "").length > 2 ? true : false;
      else {
      }
    }),
  body: yup
    .string()
    .required("Body Required!")
    .test("isText8 ", "Must be at least 8 characters", (value) => {
      if (value) return value.replace(/\s/g, "").length > 8 ? true : false;
      else {
      }
    }),
  rating: yup
    .string()
    .required("Rating Required")
    .test("isRating15 ", "Rating must be between 1-5!", (value) => {
      return parseInt(value) > 0 && parseInt(value) < 6;
    }),
});

export default function ReviewForm({ setModall, addReview }) {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ImageBackground
        source={require("../assets/bg.png")}
        style={globalStyles.cont}
      >
        <MaterialIcons
          name="close"
          size={30}
          color="white"
          onPress={() => setModall(false)}
          style={styles.modalClose}
        />
        <Formik
          initialValues={{ title: "", body: "", rating: "" }}
          validationSchema={ReviewSchema}
          onSubmit={(values) => {
            addReview(values);
          }}
        >
          {(props) => (
            <View>
              <TextInput
                placeholder="Review Title..."
                onChangeText={props.handleChange("title")}
                value={props.values.title}
                style={globalStyles.input}
                onBlur={props.handleBlur("title")}
              />
              <Text style={globalStyles.errorText}>
                {props.touched.title && props.errors.title}
              </Text>
              <TextInput
                multiline
                placeholder="Review Body..."
                onChangeText={props.handleChange("body")}
                value={props.values.body}
                style={globalStyles.input}
                onBlur={props.handleBlur("body")}
              />
              <Text style={globalStyles.errorText}>
                {props.touched.body && props.errors.body}
              </Text>
              <TextInput
                placeholder="Rating (1-5)..."
                onChangeText={props.handleChange("rating")}
                value={props.values.rating}
                style={globalStyles.input}
                keyboardType="numbers-and-punctuation"
                onBlur={props.handleBlur("rating")}
              />
              <Text style={globalStyles.errorText}>
                {props.touched.rating && props.errors.rating}
              </Text>
              <TouchableOpacity onPress={props.handleSubmit} style={styles.but}>
                <Text
                  style={{
                    color: "white",
                    fontSize: 20,
                    paddingVertical: 10,
                  }}
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
  modalClose: {
    borderWidth: 2,
    borderColor: "white",
    opacity: 1,
    alignSelf: "center",
    padding: 10,
    borderRadius: 9,
    marginBottom: 40,
  },
});
