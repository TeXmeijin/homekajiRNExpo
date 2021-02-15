import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {Main} from "../screens/Main";
import {Login} from "../screens/Login";

const Stack = createStackNavigator()
const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={Main}/>
      <Stack.Screen name="Login" component={Login}/>
    </Stack.Navigator>
  )
}

export const Navigation = () => {
  return (
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
  )
}
