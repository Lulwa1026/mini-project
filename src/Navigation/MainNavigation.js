import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../pages/HomeScreen";
import DetailsScreen from "../pages/DetailsScreen";
import ProfileScreen from "../pages/ProfileScreen";
import HomeNavigation from "./HomeNavigation";
import CreateItemScreen from "../pages/CreateItemScreen";
import ProfileNavegation from "./ProfileNavegation";

const Tab = createBottomTabNavigator();

const MainNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeNavigation} />
      {/* <Tab.Screen name="Details" component={DetailsScreen} /> */}
      <Tab.Screen name="My Profile" component={ProfileNavegation} />
      <Tab.Screen name="Creat Item" component={CreateItemScreen} />
    </Tab.Navigator>
  );
};

export default MainNavigation;

// import { StyleSheet, Text, View } from "react-native";
// import React from "react";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import HomeScreen from "../pages/HomeScreen";
// import ProfileScreen from "../pages/ProfileScreen";
// import DetailsScreen from "../pages/DetailsScreen";
// import { MaterialCommunityIcons } from "@expo/vector-icons";
// const Tab = createBottomTabNavigator();

// const MainNavigation = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         tabBarActiveTintColor: "tomato",
//         tabBarInactiveTintColor: "black",
//       }}
//     >
//       <Tab.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="home" color={color} size={size} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={ProfileScreen}
//         options={{
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="cog" color={color} size={size} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Details"
//         component={DetailsScreen}
//         options={{
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="account" color={color} size={size} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

// export default MainNavigation;

// const styles = StyleSheet.create({});
