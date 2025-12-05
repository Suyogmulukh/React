import React from 'react'

const ToduItem = ({ todo, index, onEdit, onDelete }) => {
    return (     
    <li className="flex items-center justify-between p-5 border-b-2 border-black bg-pink-200">
      <span className="text-lg text-black flex-1">{todo}</span>
      <div className="flex gap-3">
        <button
          onClick={() => onEdit(index)}
          className="w-24 h-12 border-2 border-black bg-white hover:bg-gray-100 transition-colors flex items-center justify-center text-lg font-bold"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(index)}
          className="w-24 h-12 border-2 border-black bg-white hover:bg-gray-100 transition-colors flex items-center justify-center text-lg font-bold"
        >
          Delete
        </button>
      </div>
    </li>

  );
};
export default ToduItem
