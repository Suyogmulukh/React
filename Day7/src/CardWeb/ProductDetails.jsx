import React, { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
    const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [isWishlisted, setIsWishlisted] = useState(false);

   const getProduct = async () => {
    try {
      const response = await axios.get(`https://dummyjson.com/products/${id}`);
        setProduct(response.data);
        // console.log(response.data);
        
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  if (!product) return <div className="flex justify-center items-center min-h-screen text-gray-600">Loading...</div>;

  return (
      <div className="min-h-screen bg-gray-50">      
    <div  className="max-w-7xl mx-auto p-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* LEFT - Image Section */}
          <div className="lg:w-2/5">
            <div className="bg-white border rounded shadow-sm p-8 relative">
              <button 
                onClick={() => setIsWishlisted(!isWishlisted)}
                className="absolute top-4 right-4 bg-white shadow-md p-2 rounded-full hover:scale-110 transition-transform"
              >
                <Heart 
                  className={`w-6 h-6 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-400'}`}
                />
              </button>
              <img
                src={product.images[0]}
                alt={product.title}
                className="w-full h-[478px] object-contain"
              />
              <div className="flex gap-3 mt-6 justify-center">
                <button className="flex-1 bg-orange-500 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded shadow-md transition-colors">
                  🛒 ADD TO CART
                </button>
                <button className="flex-1 bg-sky-600 hover:bg-sky-800 text-white font-semibold py-3 px-6 rounded shadow-md transition-colors">
                  ⚡ BUY NOW
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT - Details Section */}
          <div className="lg:w-3/5 space-y-4">
            <div className="bg-white border rounded shadow-sm p-6">
              {/* Title */}
              <h1 className="text-lg text-gray-800 leading-relaxed">
                {product.title}
             </h1>
            <p className="text-sm text-gray-500 ">{product.description}</p>
                          

              {/* Rating */}
              <div className="flex items-center gap-3 mt-3">
                <span className="bg-green-600 text-white px-2.5 py-1 text-sm font-semibold rounded flex items-center gap-1">
                  {product.rating.toFixed(1)} 
                </span>
                <span className="text-gray-600 text-sm font-medium">
                  20,000 Ratings & 32,000 Reviews
                </span>
                <span className="flex items-center gap-1">
                  <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" alt="Assured" className="h-5" />
                </span>
              </div>

              {/* Special Price Badge */}
              <div className="mt-4">
                <span className="text-green-600 font-semibold text-sm">Special price</span>
              </div>

              {/* Price Section */}
              <div className="flex items-center gap-3 mt-2">
                <span className="text-3xl font-medium text-gray-900">
                  ₹{product.price}
                </span>
                <span className="line-through text-gray-400 text-lg">
                  {product.originalPrice}
                </span>
                <span className="text-green-600 font-medium text-base">
                  {product.discountPercentage}% off
                </span>
              </div>

              {/* Project Promise Fee */}
              <div className="mt-2 text-sm">
                <span className="text-gray-700">+ ₹19 Project Promise Fee </span>
                <a href="#" className="text-blue-600 font-medium hover:underline">Learn more</a>
              </div>

              {/* Delivery Info */}
              <p className="text-sm text-gray-700 mt-3">
                Secure delivery by <span className="font-semibold">11 PM Tomorrow</span>
              </p>

              {/* Available Offers */}
              <div className="mt-5">
                <h3 className="font-semibold text-gray-900 mb-3">Available offers</h3>
                <div className="space-y-2.5">
                  <div className="flex items-start gap-2.5">
                    <span className="text-green-600 text-lg mt-0.5">🏷️</span>
                    <div className="text-sm">
                      <span className="font-semibold text-gray-900">Bank Offer</span>
                      <span className="text-gray-700"> 5% cashback on Axis Bank Flipkart Debit Card up to ₹750 </span>
                      <a href="#" className="text-blue-600 font-medium hover:underline">T&C</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-green-600 text-lg mt-0.5">🏷️</span>
                    <div className="text-sm">
                      <span className="font-semibold text-gray-900">Bank Offer</span>
                      <span className="text-gray-700"> 5% cashback on Flipkart SBI Credit Card upto ₹4,000 per calendar quarter </span>
                      <a href="#" className="text-blue-600 font-medium hover:underline">T&C</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-green-600 text-lg mt-0.5">🏷️</span>
                    <div className="text-sm">
                      <span className="font-semibold text-gray-900">Bank Offer</span>
                      <span className="text-gray-700"> Flat ₹50 off on Flipkart Bajaj Finserv Insta EMI Card. Min Booking Amount: ₹2,500</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-green-600 text-lg mt-0.5">🏷️</span>
                    <div className="text-sm">
                      <span className="font-semibold text-gray-900">Special Price</span>
                      <span className="text-gray-700"> Get extra 42% off </span>
                      <a href="#" className="text-blue-600 font-medium hover:underline">T&C</a>
                    </div>
                  </div>
                </div>
                <button className="text-blue-600 font-semibold text-sm mt-3 hover:underline">
                  View 14 more offers
                </button>
              </div>

              {/* Warranty */}
              <div className="mt-5 pt-5 border-t">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📋</span>
                  <span className="text-sm text-gray-700">
                    <span className="font-semibold">1 Year Warranty</span> from the Date of Purchase
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;