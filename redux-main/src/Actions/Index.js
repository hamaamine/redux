export const ADD_TASK = 'ADD_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const SET_FILTER = 'SET_FILTER';

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

export const editTask = (taskId, newDescription) => ({
  type: EDIT_TASK,
  payload: { taskId, newDescription },
});

export const toggleTask = (taskId) => ({
  type: TOGGLE_TASK,
  payload: taskId,
});

export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: filter,
});
