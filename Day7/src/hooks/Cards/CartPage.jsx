import { useCart } from "./CartContext";

const CartPage = () => {
  const { cart, removeFromCart, totalItems, totalPrice } = useCart();

  return (
    <div style={{ width: "50%" }} className="p-10">
      <h2 className="ml-5 mb-2 font-bold text-gray-700 text-2xl">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="bg-amber-300 p-2 inline-block rounded-lg text-blue-500 mb-3 font-medium ml-5">Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="mb-2 ml-5 bg-gray-300 h-20 w-fit py-5 px-4 font-medium rounded-2xl" >
            {item.name} — ₹{item.price}
            <button className="bg-red-500 p-2 rounded-lg text-white ml-10 "
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        ))
      )}

      <hr />
      <p className="bg-gray-300 inline-block px-5 py-1.5 rounded-sm mt-4 ml-4"><strong>Total Items:</strong> {totalItems}</p>
      <p className="bg-gray-300 inline-block px-5 py-1.5 rounded-sm ml-10"><strong>Total Price:</strong> ₹{totalPrice}</p>
    </div>
  );
};

export default CartPage;
