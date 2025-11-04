
import React from "react";

const Badge = ({ text, color }) => {
  const colorClasses = {
    red: "bg-red-500",
    green: "bg-green-500",
    blue: "bg-blue-500",
    yellow: "bg-yellow-500",
    gray: "bg-gray-500",
  };

  return (
    <div
          className={`inline-block px-3 py-1 text-xs font-semibold text-white rounded-full 
            ${colorClasses[color] || "bg-gray-500"}`}
     >
      {text}
    </div>
  );
};

export default Badge;
