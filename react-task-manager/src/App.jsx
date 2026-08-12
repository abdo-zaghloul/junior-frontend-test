

import AddTaskForm from './components/AddTaskForm';
import FilterBar from './components/FilterBar';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="max-w-xl mx-auto mt-10 px-4 font-sans">
      <h1 className="text-2xl font-bold mb-6">Task Manager</h1>
      <AddTaskForm />
      <FilterBar />
      <TaskList />
    </div>
  );
}

export default App;