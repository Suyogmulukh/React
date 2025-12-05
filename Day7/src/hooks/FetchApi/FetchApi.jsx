
// using Promises

import React, { useEffect, useState } from 'react'

const FetchApi = () => {
    const [users, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                if (!response.ok) {
                    throw new error("Failed To Fetch Data")
                }
                return response.json()
            })
            .then((data) => {
                setUser(data);
                setLoading(false);

            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);
   if(loading){
        return <h2>Loading users...</h2>
    }
    if(error){
        return <h2>Error: {error}</h2>
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

export default FetchApi
