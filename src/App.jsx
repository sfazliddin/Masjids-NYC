import { useState } from 'react'
import HomePage from './components/Home';
import Manhattan from './components/Manhattan';
import DarkModeButton from './components/DarkModeButton'
import StatenIsland from './components/StatenIsland';
import Brooklyn from './components/Brooklyn';
import Bronx from './components/Bronx';



const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const className = isDarkMode ? 'dark-mode' : '';

  return (
    <div className={className}>
      <DarkModeButton />
      <HomePage/>
      <Manhattan/>
      <StatenIsland/>
      <Brooklyn/>
      <Bronx/>
      <Queens/>
    </div>
  );
};

export default App;