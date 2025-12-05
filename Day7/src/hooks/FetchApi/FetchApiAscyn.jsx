import React, { useEffect, useState } from 'react'

const FetchApiAsync = () => {
    const [users, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const fetchApi = async () => {
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            if (!res.ok) {
              throw new error("Failed Api Fetch");
            }
            const data = await res.json();
            setUser(data);

        }
        catch (error) {
            setError(error)
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchApi(); 
    },[])

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

export default FetchApiAsync
