import React from "react";

const LargeTextArea = ({ value, onChange, placeholder }) => {
  return (
    <div className="w-full min-h-[400px] border-2 border-gray-800 rounded p-6 bg-white">
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-full min-h-[360px] resize-none focus:outline-none text-lg"
        placeholder={placeholder}
      />
    </div>
  );
};

export default LargeTextArea;
