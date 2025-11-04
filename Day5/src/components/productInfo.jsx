
import React from "react";

const ProductInfo = ({ name, price, children }) => {
  return (
    <div className="mt-2">
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-blue-600 font-bold">{price}</p>
      {children && <p className="text-sm text-gray-600 mt-1 ">{children}</p>}
    </div>
  );
};

export default ProductInfo;
