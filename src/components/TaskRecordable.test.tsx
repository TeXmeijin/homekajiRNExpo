import * as React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import TaskRecordable from './TaskRecordable';
import { Task } from '../types/task';

const mockTask: Task = {
  id: 'id',
  name: 'name',
  last_checked: 'hoge',
};

test('form submits two answers', () => {
  const { getByText } = render(<TaskRecordable task={mockTask} />);

  const pressAble = getByText(mockTask.name);
  expect(pressAble).toBeTruthy();
  fireEvent.press(pressAble);
});
