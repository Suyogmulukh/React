import React from 'react'

function ProductCard({product}) {
  return (
    <div className='border p-4 rounded shadow-sm hover:shadow-md transition w-full'>
        <img src = {product.image} className='w-full h-40 object-contain mb-3' alt={product.title} />
        <h2 className='text-sm font-semibold line-clamp-2 mb-1 h-10'>
            {product.title}
          </h2>
          
          <p className='font-medium text-xs text-gray-800 line-clamp-3 h-12 mb-1 whitespace-normal'>
              {product.description}
          </p>

          <div className='flex justify-between items-center px-4 '>  
        <p className='  font-bold text-xl '>
            ${product.price}
          </p>
          
        <p className='text-yellow-600 font-medium text-lg'>
            {product.rating.rate}
        </p>
          </div>
    </div>
  )
}

export default ProductCard;