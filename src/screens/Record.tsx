import React from "react";
import {Text, View} from "react-native";

export const Record = () => {
  return (
    <View style={{ paddingVertical: 60, paddingHorizontal: 24, backgroundColor: '#333', height: '100%' }}>
      <Text style={{color: '#fafafa'}}>
        タスクを記録する
      </Text>
    </View>
  )
}
