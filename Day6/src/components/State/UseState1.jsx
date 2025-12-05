import React, { useState } from 'react'

const UseState1 = () => {
    const [userName, setUserName] = useState();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        if (userName.trim() === '' || userName.length === 0) {
            setIsLoggedIn(false);
            alert('Please enter a valid username');
        }
        else {
            setIsLoggedIn(true);
        }
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUserName('');
    }

    if (isLoggedIn) {
        return (
            <div>
                <h2>Welcome, {userName}!</h2>
                <button onClick={handleLogout}>Logout</button>
            </div>
        );
    }
    else {
        return (
            <div>
                <input type='text' placeholder='Enter Username' value={userName} onChange={(e) => setUserName(e.target.value)} />
                <button onClick={handleLogin}>Login</button>
            </div>
        );
    }
}

export default UseState1
