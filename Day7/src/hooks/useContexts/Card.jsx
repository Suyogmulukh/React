import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext';

const Card = () => {
    const theme = useContext(ThemeContext);
    return (
      <div
    style={{
        background: theme.background,
        color: theme.color,
        padding: "20px",
        borderRadius: "12px",
        border: "1px solid gray"
    }}>
        <h2>Card title</h2>
        <p>This is the paragraph content for this dummy card.</p>
    </div>
  );
}

export default Card
