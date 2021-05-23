export type Task = {
  id: string;
  name: string;
  last_checked: string;
};

export type TaskGroup = {
  name: string;
  taskList: Task[];
};

export type TaskGroupList = TaskGroup[];
