import React from "react";
import { View, Text, ImageBackground } from "react-native";
import StyledButton from "../StyledButton";
import styles from "./styles.js";

const CarItem = () => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require("../../assets/images/ModelX.jpeg")}
        style={styles.image}
      />

      <View style={styles.titles}>
        <Text style={styles.title}>Model X</Text>
        <Text style={styles.subtitle}>
          {/* {tagline} <Text style={styles.subtitleCTA}>{taglineCTA}</Text> */}
        </Text>
      </View>
      <StyledButton
        type="primary"
        content="Custom Order"
        onPress={() => {
          console.log("coustom Order");
        }}
      />
      <StyledButton
        type="Secondary"
        content="Custom Order"
        onPress={() => {
          console.log("Existing Inventory");
        }}
      />
    </View>
  );
};

export default CarItem;
