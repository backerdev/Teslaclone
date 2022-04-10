import { View, Text, FlatList, Dimensions } from "react-native";
import Cars from "../../assets/cars";
import React from "react";
import CarItem from "../CarItem";
import styles from "./style";
const CarsList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={Cars}
        renderItem={({ item }) => <CarItem car={item} />}
        keyExtractor={(item) => item.name}
        //snap to alignment
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("window").height}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default CarsList;
