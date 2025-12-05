import React from "react";

/* Card Component */
const Card = ({ users }) => {

  return (
    <div className="w-full max-w-sm bg-gray-200 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">

      {/* Image */}
      <div className="h-52 w-full overflow-hidden">
        <img
         src={users.image}
          // alt={users.title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        <h2 className="text-lg font-semibold text-gray-800 truncate">
          {users.firstName} { users.lastName}
        </h2>

        <p className="text-sm text-gray-500 line-clamp-2">
          {users.address.address},{users.address.city}, {users.address.state}
        </p>

        <div className="flex items-center justify-between pt-3">
          <span className="text-lg font-bold text-blue-600">
            {users.birthDate}
          </span>

          <div className=" text-xs font-medium rounded-lg hover:bg-blue-700 transition whitespace-nowrap">
            {users.email}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;