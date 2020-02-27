import React, { useState } from 'react';
import { Grommet } from 'grommet';

import Yui from './components/Yui'
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
      <h1>my name is yui</h1>
        <AppBar/>
        <Introduction />
        <Tour />
        <Yui />
    </Grommet>
  );
}

export default App;
