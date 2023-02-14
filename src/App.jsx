import { useState } from 'react'
import HomePage from './components/Home';

import DarkModeButton from './utils/DarkModeButton'



const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const className = isDarkMode ? 'dark-mode' : '';

  return (
    <div className={className}>
      <DarkModeButton />
      <HomePage/>
    </div>
  );
};

export default App;