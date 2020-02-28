import React, { useState } from 'react';
import { Grommet } from 'grommet';


import AppBar from './components/AppBar'
import Introduction from './components/Introduction'
import Tour from './components/Tour'
import BoilerPlate from './components/componentBoilerplateCode'

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
        <BoilerPlate />
    </Grommet>
  );
}

export default App;
