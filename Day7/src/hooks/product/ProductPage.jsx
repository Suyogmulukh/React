import React, { useEffect, useMemo, useState } from 'react'
import ProductCard from './ProductCard';
import axios from 'axios';

function ProductPage() {
    const [products,setProducts] = useState([]);
    const [search,setSearch] = useState("");
    const [sort,setSort] = useState("price-low");
    const [category, setCategory] = useState("all");

   const getData = async () => {
        try {
            const response = await axios.get("https://fakestoreapi.com/products")
            
            setProducts(response.data)
            // console.log(response.data);

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getData();
    }, [])

    const categories = useMemo(()=>{
        const all = ["all",...new Set(products.map(p=>p.category))];
        return all;
    },[products]);

    const filteredProducts = useMemo(()=>{
        console.log("useMemo running... filtering & sorting...");

        let updated = [...products];
        if(search.trim() !== ""){
            updated = updated.filter(p =>
                p.title.toLowerCase().includes(search.toLowerCase())
            );
        }

        if(category !== "all"){
            updated = updated.filter(p => p.category === category);

        }
        if(sort === "price-low"){
            updated.sort((a,b)=>a.price - b.price);
        }
      
        else if(sort == "price-high"){
            updated.sort((a,b)=>b.price -a.price);
        }
        
        else if(sort === "rating"){
            updated.sort((a,b)=>b.rating.rate - a.rating.rate);
        }
        return updated;
    },[products,search,category,sort]);
  return (
    <div className="max-w-6xl mx-auto p-4">

      <h1 className="text-2xl font-bold mb-4">🛒 FakeStore Products</h1>

      {/* Filters */}
      <div className="flex gap-4 mb-6 flex-wrap">

        <input
          type="text"
          placeholder="Search products..."
          className="border p-2 rounded w-64"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border p-2 rounded"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>

        <select
          className="border p-2 rounded"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="price-low">Price: Low → High</option>
          <option value="price-high">Price: High → Low</option>
          <option value="rating">Rating</option>
        </select>

      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

    </div>
  )
}

export default ProductPage