import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleTask } from '../redux/tasksSlice';
import EditTaskModal from './EditTaskModal';

const priorityColors = {
    High: 'bg-red-500',
    Medium: 'bg-yellow-500',
    Low: 'bg-green-500',
};

function TaskItem({ task }) {
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);

    return (
        <>
            <li className="flex items-center gap-3 py-2 border-b border-gray-100">
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => dispatch(toggleTask(task.id))}
                    className="w-4 h-4"
                />  
                <span
                    className={`flex-1 ${task.completed ? 'line-through opacity-60' : ''
                        }`}
                >
                    {task.title}
                </span>
                <span
                    className={`${priorityColors[task.priority]} text-white text-xs px-2 py-1 rounded`}
                >
                    {task.priority}
                </span>
                <button
                    onClick={() => setIsEditing(true)}
                    className="text-blue-500 hover:underline text-sm"
                >
                    Edit
                </button>
                <button
                    onClick={() => dispatch(deleteTask(task.id))}
                    className="text-red-500 hover:underline text-sm"
                >
                    Delete
                </button>
            </li>

            {isEditing && (
                <EditTaskModal task={task} onClose={() => setIsEditing(false)} />
            )}
        </>
    );
}

export default TaskItem;