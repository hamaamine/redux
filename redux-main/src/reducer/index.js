import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [], // Liste des tâches
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload); // Ajouter une tâche
    },
    editTask: (state, action) => {
      const { id, description } = action.payload;
      const task = state.tasks.find((task) => task.id === id);
      if (task) task.description = description; // Modifier une tâche
    },
    toggleTask: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) task.isDone = !task.isDone; // Changer l'état terminé/non terminé
    },
    filterTasks: (state, action) => {
      state.filter = action.payload; // Filtrer les tâches
    },
  },
});

export const { addTask, editTask, toggleTask, filterTasks } = taskSlice.actions;
export default taskSlice.reducer;
