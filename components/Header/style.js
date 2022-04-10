import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    top: 50,
    paddingHorizontal: 20,
    zIndex: 1,
  },
  logo: {
    width: 100,
    height: 20,
    resizeMode: "contain",
  },
  menu: {
    width: 25,
    height: 20,
    resizeMode: "contain",
  },
});

export default styles;
