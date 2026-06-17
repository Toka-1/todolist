export const Hi = () => {
  return (
     <div className="flex justify-between items-center  text-gray-500 mt-6 px-1 ">
              <span>
                {todos.filter((todo) => !todo.completed).length} of{" "}
                {todos.length} tasks completed
              </span>

              <button
                onClick={() =>
                  setTodos(todos.filter((todo) => !todo.completed))
                }
                className="text-red-500 hover:text-red-700 cursor-pointer"
              >
                Clear completed
              </button>
            </div>  
  );
};
