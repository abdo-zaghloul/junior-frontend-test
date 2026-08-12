import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/tasksSlice';

function AddTaskForm() {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [priority, setPriority] = useState('Medium');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) return;
        dispatch(addTask(title.trim(), priority));
        setTitle('');
        setPriority('Medium');
    };

    return (
        <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
            <input
                type="text"
                placeholder="Task title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="border border-gray-300 rounded px-3 py-2"
            >
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
                Add
            </button>
        </form>
    );
}

export default AddTaskForm;