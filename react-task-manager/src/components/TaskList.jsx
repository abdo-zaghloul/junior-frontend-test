import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';

function TaskList() {
    const tasks = useSelector((state) => state.tasks.items);
    const filter = useSelector((state) => state.tasks.filter);

    const filteredTasks =
        filter === 'All' ? tasks : tasks.filter((e) => e.priority === filter);

    if (filteredTasks.length === 0) {
        return <p className="text-gray-400 text-center py-6">No tasks to show.</p>;
    }

    return (
        <ul className="divide-y divide-gray-100">
            {filteredTasks.map((task) => (
                <TaskItem key={task.id} task={task} />
            ))}
        </ul>
    );
}

export default TaskList;