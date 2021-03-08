import {BottomTabNavigationOptions} from "@react-navigation/bottom-tabs";
import {Image, View} from "react-native";
import React from "react";

const AccountTabIcon: BottomTabNavigationOptions['tabBarIcon'] = (props) => {
  return (
    <View style={{padding: 16}}>
      {
        props.focused ?
          <Image style={{width: 40, height: 40}} source={require('src/assets/account.png')}/>
          :
          <Image style={{width: 40, height: 40}} source={require('src/assets/account_off.png')}/>
      }
    </View>
  )
}

export default AccountTabIcon
