import React from 'react';
import { Grommet, Box } from 'grommet';

import MyFooter from './components/MyFooter'
import Introduction from './components/Introduction'
import Tour from './components/Tour'

import background from "./blogic/resource/images/backdrop.png"

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
  console.log(background)
  return (
    // potentially bad practice by not utilising theme variable to set overall background
    <Box 
      // background="linear-gradient(102.77deg, #015374 -9.18%, #002575 209.09%)"

      background={{
        "color": "",
        "dark": true,
        "opacity": true,
        "position": "bottom",
        "repeat": "no-repeat",
        "size": "cover",
        "image": "url(/static/media/backdrop.d50eb1b0.png)"
      }}

    >
      <Grommet theme={theme} full>
          <Introduction />
          <Tour />  
      </Grommet>
    <MyFooter />
    </Box>
  );
}

export default App;
