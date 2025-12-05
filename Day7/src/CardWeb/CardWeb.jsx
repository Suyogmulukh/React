import React, { useEffect, useState } from "react";
import "remixicon/fonts/remixicon.css";
import axios from "axios";
import { Link } from "react-router-dom";

const CardWeb = () => {
  const [userdata, setUserdata] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");

      const data = response.data.products;
      // console.log(data);

      setUserdata(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (

    <div className="min-h-screen bg-gray-100 p-6">

      <div className="flex flex-wrap justify-center gap-6 ">
          {userdata.map((user) => (       
            <div
            key={user.id}
            className="w-[280px] bg-white rounded-sm border cursor-pointer shadow-sm hover:shadow-md transition overflow-hidden relative"
          >
            <Link to={`/product/${user.id}`}>

            {/* Heart Icon */}
            <div className="absolute top-3 right-3 text-gray-400 cursor-pointer hover:text-red-500">
              <i className="ri-heart-line"></i>
            </div>

            {/* Image */}
            <div className="w-full h-[260px] flex items-center justify-center bg-white p-4">
              <img
                src={user.images[0]}
                alt={user.title}
                className="max-h-full object-contain"
              />
            </div>

            {/* Body */}
            <div className="px-4 pb-4 space-y-1">
              {/* Sponsored */}
              <p className="text-xs text-gray-400">Sponsored</p>

              {/* Title */}
              <h2 className="text-sm text-gray-800 leading-snug line-clamp-2">
                {user.title}
              </h2>

              {/* Extra Info */}
              <p className="text-xs text-gray-500">
                Height: {user.dimensions?.height || "N/A"} cm
              </p>

              {/* rating */}
              <h3 className="flex items-center gap-1 bg-green-500 px-1.5 rounded w-fit text-white text-sm font-medium font-mono ">
                {user.rating.toFixed(1)}
                <i className="ri-star-fill text-xs"></i>
              </h3>

              {/* Price Section */}
              <div className="flex items-center gap-2 mt-2">
                <span className="text-lg font-semibold text-black">
                  ₹{user.price}
                </span>

                <span className="text-sm text-gray-400 line-through">
                  ₹{Math.round(user.price * 1.6)}
                </span>

                <span className="text-sm font-semibold text-green-600">
                  {Math.round(user.discountPercentage)}% off
                </span>
              </div>

              {/* Bank Offer */}
              <p className="text-sm text-green-600 font-medium mt-1">
                Bank Offer
              </p>
            </div>
        </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardWeb;
