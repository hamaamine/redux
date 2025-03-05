import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../reducer';
import { v4 as uuidv4 } from 'uuid';

const AddTask = () => {
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (description.trim()) {
      dispatch(addTask({ id: uuidv4(), description, isDone: false }));
      setDescription(''); // Réinitialiser l'input
    }
  };

  return (
    <div>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Add a task"
      />
      <button onClick={handleAddTask}>Add</button>
    </div>
  );
};

export default AddTask;
