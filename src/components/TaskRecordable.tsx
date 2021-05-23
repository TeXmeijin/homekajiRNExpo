import React, { PropsWithChildren } from "react";
import { useFadeAnimation } from '../hooks/useFadeAnimation';
import { Task } from "../types/task";
import { TaskListItem } from './TaskListItem';

const TaskRecordable = (props: PropsWithChildren<{ task: Task }>) => {
  const {
    isSaving,
    fadeAnim,
    onPress
  } = useFadeAnimation()

  return (
      <TaskListItem onPress={onPress} task={props.task} fadeAnim={fadeAnim} isSaving={isSaving}></TaskListItem>
  )
}

export default TaskRecordable
