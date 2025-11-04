
import React from "react";

const Rating = ({ stars }) => {
  const totalStars = 5;
  return (
    <div className="flex items-center mt-2">
      {[...Array(totalStars)].map((_, i) => (
        <span
          key={i}
          className={`text-lg ${
            i < stars ? "text-yellow-400" : "text-gray-300"
          }`}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default Rating;
