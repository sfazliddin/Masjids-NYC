
import React, { useState } from 'react';

const DarkModeButton = () => {
  // State to keep track of whether dark mode is enabled
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  // Update the state when the button is clicked
  const toggleDarkMode = () => setDarkModeEnabled(!darkModeEnabled);

  return (
    <div>
      {/* Dark mode button */}
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>

      {/* Styles for the dark mode theme */}
      <style>
        {`
          body {
            background-color: ${darkModeEnabled ? '#333' : 'inherit'};
            color: ${darkModeEnabled ? '#fff' : 'inherit'};
          }
        `}
      </style>
    </div>
  );
};

export default DarkModeButton;