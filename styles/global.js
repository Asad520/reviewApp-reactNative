import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  cont: {
    padding: 20,
    flex: 1,
  },
  textHeading: {
    fontFamily: "ArchitectsDaughter-Regular",
    fontSize: 40,
    color: "#f9aeae",
  },
  paragraph: {
    lineHeight: 20,
    marginVertical: 8,
  },
  input: {
    borderRadius: 7,
    borderColor: "#ddd",
    padding: 10,
    fontSize: 18,
    borderWidth: 2,
    paddingVertical: 10,
    marginVertical: 10,
    color: "white",
  },
  errorText: {
    color: "red",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 6,
    marginBottom: 10,
    fontSize: 15,
  },
});

export const images = {
  ratings: {
    1: require("../assets/rating-1.png"),
    2: require("../assets/rating-2.png"),
    3: require("../assets/rating-3.png"),
    4: require("../assets/rating-4.png"),
    5: require("../assets/rating-5.png"),
  },
};
