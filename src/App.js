import React, { useState } from 'react';
import { Grommet, Box } from 'grommet';

import Footer from './components/Footer'
import Introduction from './components/Introduction'
import Tour from './components/Tour'
import backdrop from "./background.jpg"
import Test from "./Test"

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
  console.log(backdrop)
  return (
    // potentially bad practice by not utilising theme variable to set overall background
    <Box 
      // background="linear-gradient(102.77deg, #015374 -9.18%, #002575 209.09%)"

      background={{
        "color": "neutral-1",
        "dark": true,
        "opacity": true,
        "position": "bottom",
        "repeat": "no-repeat",
        "size": "cover",
        "image": "url(/static/media/background.5b0f042c.jpg)"
      }}

    >
      <Grommet theme={theme} full>
          <Introduction />
          <Tour />
          <Footer />
          <Test />
      </Grommet>
    </Box>
  );
}

export default App;
