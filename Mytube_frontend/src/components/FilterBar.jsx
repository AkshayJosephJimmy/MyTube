// components/FilterBar.jsx


const filters = ['React', 'JavaScript', 'CSS'];

export default function FilterBar({ onSelect }) {
  return (
    <div className="flex gap-4 p-4 bg-gray-100">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onSelect(filter)}
          className="bg-blue-200 text-blue-900 font-medium px-4 py-1 rounded hover:bg-blue-300 transition"
        >
          {filter}
        </button>
        
      ))}
      <button
  className={`px-3 py-1 rounded-full border `}
  onClick={() => onSelect(null)}  // 🔄 Clears the filter
>
  All
</button>
    </div>
  );
}