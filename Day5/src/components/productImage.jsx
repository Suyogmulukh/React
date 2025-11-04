
import React from "react";

const ProductImage = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-72 object-cover rounded-lg my-3"
    />
  );
};

export default ProductImage;
