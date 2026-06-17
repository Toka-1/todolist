"use client";

import { useState } from "react";
import { List } from "./_components/list";

export default function Home() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [selected, setSelected] = useState("all");

  const handleAdd = () => {
    if (value.trim() === "") return;
    setTodos([...todos, { id: Date.now(), text: value, completed: false }]);
    setValue("");
  };

  const toggleTask = (id) => {
    setTodos(
      todos.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const deleteTask = (id) => {
    setTodos(todos.filter((task) => task.id !== id));
  };

  const filteredTask = todos.filter((task) => {
    if (selected === "active") return !task.completed;
    if (selected === "completed") return task.completed;
    return true;
  });

  const completedCount = todos.filter((t) => t.completed).length;

  return (
    <div className="flex flex-col items-center h-screen bg-[#F3F4F6] pt-[60px]">
      <div className="w-[377px] bg-white p-6 rounded-lg shadow-[0px_4px_12px_rgba(0,0,0,0.16)] border border-gray-100">
        <h1 className="text-2xl font-semibold text-center mb-6 text-black">
          To-Do list
        </h1>

        <div className="flex gap-2 mb-6">
          <input
            className="flex-grow border 2-px border-[#2463EB] rounded-lg px-4 py-2 placeholder-gray-500 text-gray-900 outline-none"
            placeholder="add new task..."
            value={value}
            onChange={(event) => setValue(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                handleAdd();
              }
            }}
          />
          <button
            onClick={handleAdd}
            className="bg-[#3C82F6] text-white px-4 py-2 rounded text-sm font-medium hover:bg-[#2A6BC0] width: 38
height: 32;
border-radius: 6px;
padding-top: 4px;
padding-right: 12px;
padding-bottom: 4px;
padding-left: 12px;
gap: 10px;


"
          >
            Add
          </button>
        </div>

        <div className="flex gap-2 mb-6">
          {["all", "active", "completed"].map((type) => (
            <button
              key={type}
              className={`${
                selected === type
                  ? "bg-[#3C82F6] text-white"
                  : "bg-[#F3F4F6] text-gray-400 hover:bg-gray-200 hover:text-gray-600"
              } px-4 py-1.5 rounded-sm text-sm capitalize transition-colors duration-200`}
              onClick={() => setSelected(type)}
            >
              {type}
            </button>
          ))}
        </div>

        {todos.length !== 0 ? (
          <div>
            {filteredTask.map((todo) => (
              <List
                key={todo.id}
                todo={todo}
                toggletask={toggleTask}
                deletetask={deleteTask}
              />
            ))}
          </div>
        ) : (
          <div className="text-center text-[#6B7280]">
            no tasks yet. Add one above!
          </div>
        )}

        {todos.length !== 0 && (
          <div className="border-t border-gray-200 my-2 w-full mt-4">
            <div className="flex justify-between items-center text-gray-500 mt-6 px-1">
              <span>
                {completedCount} of {todos.length} tasks completed
              </span>

              <button
                onClick={() => {
                  if (
                    confirm(
                      "Are you sure you want to clear all completed tasks?",
                    )
                  ) {
                    setTodos(todos.filter((t) => !t.completed));
                  }
                }}
                className="text-red-500 hover:text-red-700 cursor-pointer"
              >
                Clear completed
              </button>
            </div>
          </div>
        )}

        <p className="text-[15px] text-center mt-3 text-gray-400">
          Powered by{" "}
          <span className="text-[#3B73ED] font-semibold">Pinecone academy</span>
        </p>
      </div>
    </div>
  );
}
