
import { useEffect, useState } from 'react';
import Card from './Card' 
import axios from 'axios';

const CardApi = () => {
  const [products, setProducts] = useState([]);
  const getData = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/users");
      setProducts(response.data.users);
      // console.log(response.data.users);
      
    } catch (error) {
      console.error(error);
    }
  };

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <div>
      
    <button onClick={getData} className='bg-gray-400 px-10 py-5 ' >
      get Data
      </button>
    <div className="min-h-screen bg-gray-100 p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
      {products.map((users) => (
        <Card key={users.id} users={users} />
      ))}
    </div>
      </div>
  );
};

export default CardApi;