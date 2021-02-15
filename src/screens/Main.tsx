import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import {useNavigation} from "@react-navigation/native";
import {Screens} from "../navigations/Navigation";

export const Main = function () {
  const {navigate} = useNavigation()

  return (
    <View style={styles.container}>
      <Text>ようこそ！</Text>
      <TouchableOpacity
        onPress={() => {
          navigate(Screens.Tab)
        }}
      >
        <Text>
          タスクを記録する
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
