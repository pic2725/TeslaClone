import React from "react";
import { Text, View, ImageBackground } from "react-native";
import styles from "./styles";

import StyledButton from "../StyledButton";

const CarItem = (props) => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require("../../assets/images/ModelS.jpeg")}
        style={styles.image}
      ></ImageBackground>
      <View style={styles.titles}>
        <Text style={styles.title}> Model S</Text>
        <Text style={styles.subtitle}>Starting at $69,420</Text>
      </View>

      <StyledButton
        type="primary"
        content={"custom order"}
        onPress={() => {
          console.warn("Custom order was pressed");
        }}
      />
      <StyledButton
        type="secondary"
        content={"Existing Inventory"}
        onPress={() => {
          console.warn("Existing Inventory was pressed");
        }}
      />
    </View>
  );
};
export default CarItem;
