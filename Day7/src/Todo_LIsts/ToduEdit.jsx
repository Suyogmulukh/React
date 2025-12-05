import React, { useState } from 'react'

const ToduEdit = ({ value, onSave, onCancel }) => {
  const [editValue, setEditValue] = useState(value);
  const handleSave = () => {
    if (editValue.trim() === "") return;
    onSave(editValue);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSave();
    } else if (e.key === "Escape") {
      onCancel();
    }
  };

  return (
    <li className="flex items-center gap-3 p-5 border-b-2 border-black bg-pink-300">
      <input
        type="text"
        value={editValue}
        onChange={(e) => setEditValue(e.target.value)}
        onKeyUp={handleKeyPress}
        className="flex-1 px-3 py-2 border-2 border-black outline-none text-lg bg-white"
        autoFocus
      />
      <button
        onClick={handleSave}
        className="px-6 py-2 border-2 border-black bg-white hover:bg-gray-100 transition-colors font-bold"
      >
        SAVE
      </button>
      <button
        onClick={onCancel}
        className="px-6 py-2 border-2 border-black bg-white hover:bg-gray-100 transition-colors font-bold"
      >
        CANCEL
      </button>
    </li>
  );
};

export default ToduEdit
