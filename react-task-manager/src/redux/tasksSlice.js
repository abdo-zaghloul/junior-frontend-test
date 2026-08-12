import { createSlice, nanoid } from '@reduxjs/toolkit';


// save localStorage
const loadTasksFromStorage = () => {
    try {
        const saved = localStorage.getItem('tasks');
        return saved ? JSON.parse(saved) : [];
    } catch (err) {
        console.error('Failed to load tasks from localStorage:', err);
        return [];
    }
};

const initialState = {
    items: loadTasksFromStorage(),
    filter: 'All', // 'All' | 'High' | 'Medium' | 'Low'
};

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        
        addTask: {
            reducer(state, action) {
                state.items.push(action.payload);
            },
            prepare(title, priority) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        priority,
                        completed: false,
                    },
                };
            },
        },
        editTask(state, action) {
            const { id, title, priority } = action.payload;
            const task = state.items.find((t) => t.id === id);
            if (task) {
                if (title !== undefined) task.title = title;
                if (priority !== undefined) task.priority = priority;
            }
        },
        
        deleteTask(state, action) {
            state.items = state.items.filter((t) => t.id !== action.payload);
        },
        toggleTask(state, action) {
            const task = state.items.find((t) => t.id === action.payload);
            if (task) task.completed = !task.completed;
        },

        setFilter(state, action) {
            state.filter = action.payload;
        },
    },
});

export const { addTask, editTask, deleteTask, toggleTask, setFilter } = tasksSlice.actions;
export default tasksSlice.reducer;