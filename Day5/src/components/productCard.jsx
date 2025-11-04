
import React from "react";

const ProductCard = ({ featured, children }) => {
  return (
    <div
      className={`w-1/4 h-4/5 border rounded-2xl p-4 shadow-md transition-all duration-200 ${
        featured
          ? "bg-gradient-to-br from-blue-100 to-blue-200 border-blue-400"
          : "bg-white"
      }`}
    >
      {children}    
    </div>
  );
};

export default ProductCard;
