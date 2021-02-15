import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Record} from "../screens/Record";
import {Text} from "react-native";

const Tab = createBottomTabNavigator()

export const TabScreens = {
  Record: 'Record'
}

export const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={TabScreens.Record} component={Record} options={{title: 'Record', tabBarLabel: () => <><Text>Record</Text></>}} />
    </Tab.Navigator>
  )
}
