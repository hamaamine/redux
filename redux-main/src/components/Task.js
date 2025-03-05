import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, editTask } from '../reducer';

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  const handleEdit = () => {
    const newDescription = prompt('Edit task:', task.description);
    if (newDescription) {
      dispatch(editTask({ id: task.id, description: newDescription }));
    }
  };

  return (
    <div>
      <span style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>
        {task.description}
      </span>
      <button onClick={handleToggle}>{task.isDone ? 'Undo' : 'Done'}</button>
      <button onClick={handleEdit}>Edit</button>
    </div>
  );
};

export default Task;
