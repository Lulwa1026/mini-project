import { Image, View, Text, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Edit from "./EditScreen";
const ProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>my profile</Text>
      <Image
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUTuu_iixxsHesaE-cQWh6QsEQFoxOuSvkYQ&s",
        }}
        style={{ width: 50, height: 50 }}
      />
      <Text>Lulwa</Text>

      <Button
        onPress={() => navigation.navigate("Edit", Edit)}
        title="Edit Profile"
      />
    </View>
  );
};

export default ProfileScreen;

{
  /* <Button onPress={() => {}} title="Edit Profile" /> */
}
