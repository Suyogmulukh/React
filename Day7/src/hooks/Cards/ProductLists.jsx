import ProductItems from "./ProductItems";

const products = [
  { id: 1, name: "Phone Case", price: 299 },
  { id: 2, name: "USB Cable", price: 499 },
    { id: 3, name: "Bluetooth Speaker", price: 1299 },
    { id: 4, name: "Wireless Charger", price: 999 },
];

const ProductList = () => {
  return (
    <div style={{ width: "50%" }} className="bg-fuchsia-300 h-screen p-10 ">
      <h2 className=" mb-2 font-bold text-gray-700 text-2xl uppercase"> Products</h2>
      {products.map((p) => (
        <ProductItems key={p.id} product={p} />
      ))}
    </div>
  );
};

export default ProductList;
