import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {TaskList} from "../screens/TaskList";
import TaskListTabIcon from "../components/navigation/TaskListTabIcon";
import ActivityListTabIcon from "../components/navigation/ActivityListTabIcon";
import {ActivityList} from "../screens/ActivityList";
import {COLORS} from "../constants/COLORS";
import AccountTabIcon from "../components/navigation/AccountTabIcon";

const Tab = createBottomTabNavigator()

export const TabScreens = {
  TaskList: 'TaskList',
  Activity: 'Activity',
  Account: 'Account',
}

export const TabNavigator = () => {
  return (
    <Tab.Navigator tabBarOptions={{style: {height: 100, backgroundColor: COLORS.primaryBackGround}}}>
      <Tab.Screen name={TabScreens.TaskList} component={TaskList} options={{title: 'Tasks', tabBarIcon: TaskListTabIcon, tabBarLabel: () => <></>}}/>
      <Tab.Screen name={TabScreens.Activity} component={ActivityList} options={{title: 'Activity', tabBarIcon: ActivityListTabIcon, tabBarLabel: () => <></>}}/>
      <Tab.Screen name={TabScreens.Account} component={ActivityList} options={{title: 'Account', tabBarIcon: AccountTabIcon, tabBarLabel: () => <></>}}/>
    </Tab.Navigator>
  )
}
