import React from "react";
import { View, Text, ImageBackground } from "react-native";
import StyledButton from "../StyledButton";
import styles from "./styles.js";

const CarItem = (props) => {
  const name = props.car.name;
  const tagline = props.car.tagline;
  const image = props.car.image;
  const taglineCTA = props.car.taglineCTA;
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />

      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline} <Text style={styles.taglineCTA}>{taglineCTA}</Text>
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
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
    </View>
  );
};

export default CarItem;
