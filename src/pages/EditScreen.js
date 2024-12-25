import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

const EditScreen = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <View style={styles.container}>
      <Text>edit profile :</Text>
      <Text>First Name: {inputValue}</Text>
      <TextInput
        value={inputValue}
        onChangeText={(text) => setInputValue(text)}
        placeholder="Enter text here"
      />
      <Text>Second Name: {inputValue}</Text>
      <TextInput
        value={inputValue}
        onChangeText={(text) => setInputValue(text)}
        placeholder="Enter text here"
      />
      <Text>Phone: {inputValue}</Text>
      <TextInput
        value={inputValue}
        onChangeText={(text) => setInputValue(text)}
        placeholder="Enter text here"
      />
    </View>
  );
};

export default EditScreen;

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
