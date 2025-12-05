import { useCart } from "./CartContext";

const ProductItems = ({ product }) => {
  const { addToCart } = useCart();

    return (
      <div className="h-50% flex justify-between items-center">
    <div style={{ marginBottom: "10px" }} className="bg-gray-400 h-32 w-60 p-4 rounded-lg mb-4 mt-3">
      <strong>{product.name}</strong> — ₹{product.price}
      <button className="bg-blue-500 p-2 rounded-lg text-white mt-8" 
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  </div>
  );
};

export default ProductItems;
