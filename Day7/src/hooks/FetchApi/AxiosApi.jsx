import React, { useEffect, useState } from 'react'
import axios from 'axios';

const AxiosApi = () => {

    const [users, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async() => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        
            const data = response.data;

            setUser(data);
        
       } catch (error) {
            setError(error);
        }
        finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])
    
    if (loading)
    {
        return <h2>Loading...</h2>
    }
    if (error)
    {
        return <h2>error...</h2>
    }

  return (
          <div>
        <h2>User List</h2>
        {users.map((user)=>{
            return(
                <div
                key = {user.id}
                style={{
                    border: "1px solid #a1a1a1",
                    padding: "15px",
                    marginBottom: "15px",
                    borderRadius: "25px"
                }}
            >
                <h3>{user.name}</h3>
                <p>Email: {user.email}</p>
                <p>City: {user.address.city}</p>
            </div>
            )
        })}
    </div>
  )
}

export default AxiosApi
