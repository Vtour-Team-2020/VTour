import React, { useState } from 'react';
import { Grommet } from 'grommet';


import AppBar from './components/AppBar'
import Introduction from './components/Introduction'
import Tour from './components/Tour'

// defines a theme as the global style to use for the entire page
const theme = {
  global: {
    colors: {
      brand: 'white',
      },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

function App() {
  console.log(theme)

  return (
    <Grommet theme={theme} full>
        <AppBar/>
        <Introduction />
        <Tour />
    </Grommet>
  );
}

export default App;
