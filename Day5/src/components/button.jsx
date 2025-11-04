
import React from "react";

const Button = ({ text, variant }) => {
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    secondary: "bg-gray-200 hover:bg-gray-300 text-black",
  };

  return (
    <button
      className={`px-4 py-2 rounded-md font-medium mt-4 transition-colors ${variants[variant]}`}
    >
      {text}
    </button>
  );
};

export default Button;
