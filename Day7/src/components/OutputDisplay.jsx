import React from "react";

const OutputDisplay = ({ text }) => {
  return (
    <div className="w-full min-h-[400px] border-2 border-gray-800 rounded p-6 bg-white">
      <div className="text-lg whitespace-pre-wrap">{text}</div>
    </div>
  );
};

export default OutputDisplay;
