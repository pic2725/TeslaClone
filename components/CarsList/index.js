import React from "react";
import { Text, View, FlatList, Dimensions } from "react-native";

import styles from "./styles";
import cars from "./cars";
import CarItem from "../CarItem";

const CarsList = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={({ item }) => <CarItem car={item} />}
        showsVerticalScrollIndicator={false} //hide scroll
        snapToAlignment={"start"} //start
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("window").height} // height of the each item
      />
    </View>
  );
};
export default CarsList;
