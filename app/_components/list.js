export const List = ({ todo, toggletask, deletetask }) => {
  return (
    <div className="flex justify-between items-center p-3 bg-gray-50 border border-gray-200 rounded-lg mb-[18px]">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          onChange={() => toggletask(todo.id)}
          checked={todo.completed}
        />
        <span className={todo.completed ? "line-through" : ""}>
          {todo.text}
        </span>
      </div>
      {""}
      <button
        onClick={() => {
          if (confirm("Are you sure you want to delete this task??")) {
            deletetask(todo.id);
          }
        }}
        className="px-3 py-1.5 bg-[#FEF2F2] text-[#EF4444] rounded-lg text-sm font-medium hover:bg-[#FEE2E2]"
      >
        delete
      </button>
    </div>
  );
};
