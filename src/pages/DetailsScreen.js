import { View, Text, Image } from "react-native";
import React from "react";

const DetailsScreen = ({ route }) => {
  const { name, price, description, img } = route.params;
  return (
    <View>
      <Image source={{ uri: img }} width={300} height={300} />
      <Text>{name}</Text>
      <Text>{price}</Text>
      <Text>{description}</Text>
    </View>
  );
};

export default DetailsScreen;
