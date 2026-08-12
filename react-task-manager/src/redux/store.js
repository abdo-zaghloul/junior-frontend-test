import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './tasksSlice';

export const store = configureStore({
    reducer: {
        tasks: tasksReducer,
    },
});

// Persist to localStorage on every state change
store.subscribe(() => {
    const state = store.getState();
    localStorage.setItem('tasks', JSON.stringify(state.tasks.items));
});