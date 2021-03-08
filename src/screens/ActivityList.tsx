import React from "react";
import {ScrollView, StyleSheet, Text, View} from "react-native";
import TaskWithRecord from "../components/TaskWithRecord";
import {COLORS} from "../constants/COLORS";

export const ActivityList = () => {

  return (
    <ScrollView style={styles.container}>
      {/* ScrollView自体にPaddingを当てるとBottom Barの下に入り込んでしまう */}
      <View style={{paddingTop: 80}}>
        <Text>
          ほげ
        </Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    backgroundColor: COLORS.primary,
  },
})
