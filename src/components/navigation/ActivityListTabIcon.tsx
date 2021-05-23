import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { Image, View } from 'react-native';
import React from 'react';

const ActivityListTabIcon: BottomTabNavigationOptions['tabBarIcon'] = (props) => (
  <View style={{ padding: 16 }}>
    {props.focused ? (
      <Image style={{ width: 40, height: 40 }} source={require('src/assets/activitylist.png')} />
    ) : (
      <Image
        style={{ width: 40, height: 40 }}
        source={require('src/assets/activitylist_off.png')}
      />
    )}
  </View>
);

export default ActivityListTabIcon;
