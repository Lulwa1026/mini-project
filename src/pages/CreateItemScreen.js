import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

export default function App() {
  const [inputValue, setInputValue] = useState("");

  return (
    <View style={styles.container}>
      <Text>creat item :</Text>
      <Text>Name: {inputValue}</Text>
      <TextInput
        value={inputValue}
        onChangeText={(text) => setInputValue(text)} // Handles text change
        placeholder="Enter text here"
      />
      <Text>Price: {inputValue}</Text>
      <TextInput
        value={inputValue}
        onChangeText={(text) => setInputValue(text)} // Handles text change
        placeholder="Enter text here"
      />
      <Text>Description: {inputValue}</Text>
      <TextInput
        value={inputValue}
        onChangeText={(text) => setInputValue(text)} // Handles text change
        placeholder="Enter text here"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputField: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
  },
});
