
import React from "react";
import ProductCard from "./components/productCard";
import Badge from "./components/badge";
import ProductImage from "./components/productImage";
import ProductInfo from "./components/productInfo";
import Button from "./components/button";
import Rating from "./components/rating";

function App() {
  return (
    <>
    <div className="min-h-screen bg-gray-100 flex flex-wrap gap-6 justify-center items-center">
      <h2 className="w-full text-3xl font-bold text-center mt-5">
      🛍️ E-commerces Product Showcase
      </h2>

      <ProductCard featured={true}>
        <Badge text="Featured" color="blue" />
        <ProductImage
          src="https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1926"
          alt="Smartphone"
        />
        <ProductInfo name="Galaxy X Ultra" price="$999">
          Ultimate performance with pro camera.
        </ProductInfo>
        <Rating stars={5} />
        <Button text="Buy Now" variant="primary" />
      </ProductCard>

      <ProductCard>
        <Badge text="Sale" color="red" />
        <ProductImage
          src="https://plus.unsplash.com/premium_photo-1677838847804-4054143fb91a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
          alt="Headphones"
        />
        <ProductInfo name="Noise Cancelling Headphones" price="$79.99">
          Immersive sound with long battery life.
        </ProductInfo>
        <Rating stars={4} />
        <Button text="Add to Cart" variant="primary" />
      </ProductCard>
      
      <ProductCard>
        <Badge text="New Arrival" color="green" />
        <ProductImage
          src="https://images.unsplash.com/photo-1726133812290-1fcc8a0658a4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEFpckZsZXglMjBSdW5uaW5nJTIwU2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600"
          alt="Running Shoes"
        />
        <ProductInfo name="AirFlex Running Shoes" price="$59.99">
          Lightweight, breathable design for daily comfort.
        </ProductInfo>
        <Rating stars={4} />
        <Button text="View Details" variant="secondary" />
      </ProductCard>
    </div>
    </>
  );
}

export default App;
