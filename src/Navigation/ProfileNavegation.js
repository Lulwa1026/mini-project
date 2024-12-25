import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EditScreen from "../pages/EditScreen";
import ProfileScreen from "../pages/ProfileScreen";
const Stack = createNativeStackNavigator();

const ProfileNavegation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Edit" component={EditScreen} />
    </Stack.Navigator>
  );
};

export default ProfileNavegation;
