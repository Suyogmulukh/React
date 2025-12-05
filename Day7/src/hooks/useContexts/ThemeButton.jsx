import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext';

const ThemeButton = () => {
    const theme = useContext(ThemeContext);
  return (
      <button onClick={theme.toggle} style={{
        padding: "10px 25px",
        marginBottom: "20px",
        background: theme.background,
        color: theme.color,
        border: "2px solid gray",
        borderRadius: "20px",
        cursor: "pointer"
    }}>
        Toggle button
    </button>
  )
}

export default ThemeButton

