import React from "react";
import {ScrollView, StyleSheet, View} from "react-native";
import TaskWithRecord from "../components/TaskWithRecord";
import {COLORS} from "../constants/COLORS";

export const TaskList = () => {
  const taskList = [
    '洗濯機を回す',
    '洗濯物を干す',
    '皿洗い',
    'ゴミ出し',
    '洗濯物を畳む',
    '食事を作る',
    '風呂を入れる',
    '湯船を掃除する',
    '湯船を掃除する',
    '湯船を掃除する',
    '湯船を掃除する',
  ]

  return (
    <ScrollView style={styles.container}>
      {/* ScrollView自体にPaddingを当てるとBottom Barの下に入り込んでしまう */}
      <View style={{paddingTop: 80}}>
        {
          taskList.map(task => {
            return (
              <TaskWithRecord>
                {task}
              </TaskWithRecord>
            )
          })
        }
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
