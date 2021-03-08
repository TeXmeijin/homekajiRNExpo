import {BottomTabNavigationOptions} from "@react-navigation/bottom-tabs";
import {Image, View} from "react-native";
import React from "react";

const TaskListTabIcon: BottomTabNavigationOptions['tabBarIcon'] = (props) => {
  return (
    <View style={{padding: 16}}>
      {
        props.focused ?
          <Image style={{width: 40, height: 40}} source={require('src/assets/tasklist.png')}/>
          :
          <Image style={{width: 40, height: 40}} source={require('src/assets/tasklist_off.png')}/>
      }
    </View>
  )
}

export default TaskListTabIcon
