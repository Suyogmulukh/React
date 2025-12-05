import React, { useState } from "react";

const ChangeTheme = () => {
  const [isDark, setIsDark] = useState(false);

  const themeStyles = {
    backgroundColor: isDark ? "#222" : "#fff",
    color: isDark ? "#fff" : "#222",
    height: "100vh",
    width: "100%",
    padding: "20px",
  };

  return (
    <div style={themeStyles}>
      <h2>{isDark ? "Dark Theme" : "Light Theme"}</h2>
          <button onClick={() => setIsDark((prev) => !prev)}>
              Toggle Theme
          </button>
    </div>
  );
};

export default ChangeTheme;
