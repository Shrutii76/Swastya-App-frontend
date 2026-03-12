import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import UserNavigator from "./UserNavigator";
import AshaNavigator from "./AshaNavigator";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="UserFlow" component={UserNavigator} />
        <Stack.Screen name="AshaFlow" component={AshaNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}