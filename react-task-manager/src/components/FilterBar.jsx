import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../redux/tasksSlice';

const FILTERS = ['All', 'High', 'Medium', 'Low'];

function FilterBar() {
    const dispatch = useDispatch();
    const currentFilter = useSelector((state) => state.tasks.filter);

    return (
        <div className="flex gap-2 mb-4">
            {FILTERS.map((f) => (
                <button
                    key={f}
                    onClick={() => dispatch(setFilter(f))}
                    className={`px-3 py-1 rounded border ${currentFilter === f
                            ? 'bg-blue-500 text-white border-blue-500'
                            : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                        }`}
                >
                    {f}
                </button>
            ))}
        </div>
    );
}

export default FilterBar;