import React, { useState } from 'react';
import { Grommet, Box } from 'grommet';

import Footer from './components/Footer'
import Introduction from './components/Introduction'
import Tour from './components/Tour'
import Yui from './components/Yui'


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
  return (
    // potentially bad practice by not utilising theme variable to set overall background
    <Box 
      background="linear-gradient(102.77deg, #015374 -9.18%, #002575 209.09%)"
    >
      <Grommet theme={theme} full>
          {/* <Introduction />
          <Tour />
          <Footer /> */}
          <Yui />
      </Grommet>
    </Box>
  );
}

export default App;
