import { View, Text, Button, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
const HomeScreen = () => {
  const navigation = useNavigation();
  const productList = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSua6Ozj5hffQ6qkjkbL3cAuciaKhmoQRP47w&s",
      name: "notebook",
      price: "1.750 KD",
      description: "7 mm Horizontal Lines, B5, 30 Sheets",
    },
    {
      img: "https://m.media-amazon.com/images/I/512qiK69jvL._AC_UF894,1000_QL80_.jpg",
      name: "pen",
      price: "0.500 KD",
      description: "Compact Pen 0.5 mm",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuX6o8cXwBm913jsOMzRccO8-zS2sBe-TJGA&s",
      name: "stickers",
      price: "2 KD",
      description: "3 sheets, easy to use",
    },
    {
      img: "https://static3.webx.pk/files/4688/Images/40-4688-1451359-271022084401456.png",
      name: "markers",
      price: "3 KD",
      description: "a set of 4 with different colours",
    },
  ];

  const productListViews = productList.map((product) => (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate("Details", product)}>
        <Text>{product.name}</Text>
        <Text>{product.price}</Text>
      </TouchableOpacity>
    </View>
  ));

  return (
    <View>
      <Text>Welcome</Text>
      {productListViews}
    </View>
  );
};

export default HomeScreen;

// return (
//   <View>
//     <Text>HomeScreen</Text>
//     <Button
//       title="Go to Details"
//       onPress={() => navigation.navigate("Details", )}
//     />
//   </View>
// );
