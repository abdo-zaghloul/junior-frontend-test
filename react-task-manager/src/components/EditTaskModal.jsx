import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask } from '../redux/tasksSlice';

function EditTaskModal({ task, onClose }) {
    const dispatch = useDispatch();
    const [title, setTitle] = useState(task.title);
    const [priority, setPriority] = useState(task.priority);

    const handleSave = () => {
        if (!title.trim()) return;
        dispatch(editTask({ id: task.id, title: title.trim(), priority }));
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-5 flex flex-col gap-3 min-w-[280px]">
                <h3 className="text-lg font-semibold">Edit Task</h3>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="border border-gray-300 rounded px-3 py-2"
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
                <div className="flex gap-2 mt-2">
                    <button
                        onClick={handleSave}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                    >
                        Save
                    </button>
                    <button
                        onClick={onClose}
                        className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}

export default EditTaskModal;