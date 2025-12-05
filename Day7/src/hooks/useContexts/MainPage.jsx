import React, { useState } from 'react'
import { ThemeContext } from './ThemeContext';
import ThemeButton from './ThemeButton';
import Card from './Card';

const MainPage = () => {
    const [darkMode, setDarkMode] = useState(false);

    const theme = {
         background: darkMode?"#1e1e1e":"#f5f5f5",
        color: darkMode ? "#f5f5f5" : "#1e1e1e",
        toggle: ()=>setDarkMode(!darkMode)
    }
  return (
      <ThemeContext.Provider value={theme}>
          <div style={{padding : "20px"}}>
              <ThemeButton />
            <Card />
          </div>
    </ThemeContext.Provider>
  )
}

export default MainPage
