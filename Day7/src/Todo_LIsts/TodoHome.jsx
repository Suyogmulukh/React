import React, { useState } from 'react'
import TodoInput from './InsertTodo.jsx';
import TodoItem from './ToduItem.jsx';
import TodoEdit from './ToduEdit.jsx';

const TodoHome = () => {
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const handleAdd = (todo) => {
    setTodos([...todos, todo]);
  };

  const handleDelete = (idx) => {
    setTodos(todos.filter((_, i) => i !== idx));
  };

  const handleEdit = (idx) => {
    setEditIndex(idx);
  };

  const handleUpdate = (newValue) => {
    setTodos(todos.map((todo, i) => (i === editIndex ? newValue : todo)));
    setEditIndex(null);
  };

  const handleCancel = () => {
    setEditIndex(null);
  };

  return (
    <div className="h-screen flex border-4 border-black">
      <div className="w-1/2 bg-white flex flex-col border-r-4 border-black">
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">📋 ADD TODO</h2>
            <TodoInput onAdd={handleAdd} />
          </div>
        </div>
      </div>

          {/* Todo list */}
        <div className="flex-1 overflow-y-auto bg-pink-200">
          {todos.length === 0 ? (
              <div className="text-center py-20 text-gray-600">
              <p className="text-2xl font-bold">NO TASKS YET</p>
              <p className="text-lg mt-2">Add a task on the left side</p>
            </div>
          ) : (
              <ul>
              {todos.map((todo, idx) =>
                editIndex === idx ? (
                  <TodoEdit
                  key={idx}
                    value={todo}
                    onSave={handleUpdate}
                    onCancel={handleCancel}
                  />
                ) : (
                  <TodoItem
                  key={idx}
                    todo={todo}
                    index={idx}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                    />
                )
            )}
            </ul>
          )}
        </div>
          </div> 
  );
};


export default TodoHome;
