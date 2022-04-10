import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  carContainer: {
    width: "100%",
    // height: "100%">>while in flatlist it take the height of flat list as 100%
    height: Dimensions.get("window").height, //while in flatlist it take the height of flat list as 100%
  },
  titles: {
    marginTop: "30%",
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "500",
  },
  subtitleCTA: {
    textDecorationLine: "underline",
  },
  subtitle: {
    fontSize: 16,
    color: "#5c5e62",
  },

  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },

  buttonsContainer: {
    position: "absolute",
    bottom: 50,
    width: "100%",
  },
  taglineCTA: {
    textDecorationLine: "underline",
  },
});

export default styles;
