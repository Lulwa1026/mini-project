import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigation from "./src/Navigation/MainNavigation";
const App = () => {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
};

export default App;
