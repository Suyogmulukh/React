import React from "react";

const ActionButton = ({ onClick, children, bordered = false }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 ${
        bordered ? "border-2 border-gray-800" : ""
      } rounded bg-white hover:bg-gray-100 font-medium transition-colors`}
    >
      {children}
    </button>
  );
};

export default ActionButton;
