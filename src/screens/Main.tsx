import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import React from "react";
import {useNavigation} from "@react-navigation/native";

export const Main = function () {
  const {navigate} = useNavigation()

  return (
    <View style={styles.container}>
      <Text>ほめ家事へようこそ！</Text>
      <StatusBar style="auto" />
      <TouchableOpacity
        onPress={() => {
          navigate('Login')
        }}
      >
        <Text>
          ログイン
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
