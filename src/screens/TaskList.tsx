import React from "react";
import {ScrollView, StyleSheet, Text, View} from "react-native";
import TaskRecordable from "../components/TaskRecordable";
import {COLORS} from "../constants/COLORS";
import {TaskGroupList} from "../types/task";
import TaskAddButton from "../components/TaskAddButton";

export const TaskList = () => {
  const taskGroups : TaskGroupList = [
    {
      name: '料理',
      taskList: [
        {
          id: '1',
          name: '料理',
          last_checked: '2021-03-10 22:22:22'
        },
        {
          id: '1',
          name: '皿洗い',
          last_checked: '2021-03-10 22:22:22'
        },
        {
          id: '1',
          name: '皿洗い',
          last_checked: '2021-03-10 22:22:22'
        },
      ]
    },
    {
      name: 'お風呂',
      taskList: [
        {
          id: '1',
          name: 'お湯張り',
          last_checked: '2021-03-10 22:22:22'
        },
        {
          id: '1',
          name: '皿洗い',
          last_checked: '2021-03-10 22:22:22'
        },
        {
          id: '1',
          name: '皿洗い',
          last_checked: '2021-03-10 22:22:22'
        },
      ]
    },
    {
      name: '洗濯',
      taskList: [
        {
          id: '1',
          name: '洗濯機を回す',
          last_checked: '2021-03-10 22:22:22'
        },
        {
          id: '1',
          name: '皿洗い',
          last_checked: '2021-03-10 22:22:22'
        },
        {
          id: '1',
          name: '皿洗い',
          last_checked: '2021-03-10 22:22:22'
        },
      ]
    },
  ]

  return (
    <>
      <ScrollView style={styles.container}>
        {/* ScrollView自体にPaddingを当てるとBottom Barの下に入り込んでしまう */}
        <View style={{paddingTop: 80}}>
          {
            taskGroups.map(taskGroup => {
              return (
                <View style={styles.taskGroup}>
                  <View>
                    <Text style={styles.taskGroupName}>
                      {taskGroup.name}
                    </Text>
                  </View>
                  <View style={styles.taskList}>
                    {
                      taskGroup.taskList.map(task => {
                        return (
                          <TaskRecordable task={task}>
                          </TaskRecordable>
                        )
                      })
                    }
                  </View>
                </View>
              )
            })
          }
        </View>
      </ScrollView>
      <TaskAddButton style={styles.taskAddButton}/>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    backgroundColor: COLORS.primaryBackGround,
  },
  taskGroup: {
    marginTop: 56,
  },
  taskGroupName: {
    fontSize: 20,
    color: COLORS.primaryLighten2,
  },
  taskList: {
    marginTop: 16,
  },
  taskAddButton: {
    position: 'absolute',
    right: 32,
    bottom: 24,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowColor: COLORS.disabled,
    shadowOpacity: 0.7,
    shadowRadius: 3,
    elevation: 5,
  }
})
