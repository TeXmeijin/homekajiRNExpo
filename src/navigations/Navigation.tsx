import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Main } from '../screens/Main';
import { TabNavigator } from './TabNavigation';

const Stack = createStackNavigator();

export const Screens = {
  Main: 'Main',
  Tab: 'Tab',
};

const StackNavigator = () => (
  <Stack.Navigator initialRouteName={Screens.Main}>
    <Stack.Screen name={Screens.Main} component={Main} options={{ title: 'Welcome' }} />
    <Stack.Screen name={Screens.Tab} component={TabNavigator} options={{ headerShown: false }} />
  </Stack.Navigator>
);

export const Navigation = () => (
  <NavigationContainer>
    <StackNavigator />
  </NavigationContainer>
);
