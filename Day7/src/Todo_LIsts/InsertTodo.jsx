import React, { useState } from 'react'

const InsertTodo = ({ onAdd }) => {
    const [input, setInput] = useState("");
    const handleSubmit = () => {
        if (input.trim() === "") return;
        onAdd(input);
        setInput("");
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSubmit();
        }
    };

    return (
        <div className="flex items-center gap-4 p-6">
            <input
                type="text"
                value={input}
                placeholder="Type your task here..."
                onChange={(e) => setInput(e.target.value)}
                onKeyUp={handleKeyPress}
                className="flex-1 px-4 py-3 border-2 border-black outline-none text-lg bg-white"
            />
            <button
                onClick={handleSubmit}
                className="w-32 h-14 rounded-full border-2 border-black bg-white hover:bg-gray-100 transition-colors flex items-center justify-center text-3xl font-bold"
            >
                Add
            </button>
        </div>
    );
};

export default InsertTodo;
