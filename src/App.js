import React, { Fragment } from "react";
import { Grommet, Box } from "grommet";

import MyFooter from "./components/MyFooter";
import Introduction from "./components/Introduction";
import ProtraitReminder from "./ProtraitReminder";
import Tour from "./components/Tour";

import background from "./components/blogic/resource/images/backdrop.png";

import DeviceOrientation, { Orientation } from "react-screen-orientation";

// defines a theme as the global style to use for the entire page
const theme = {
  global: {
    colors: {
      brand: "white"
    },
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px"
    }
  }
};

function App() {
  console.log(background);
  return (
    // potentially bad practice by not utilising theme variable to set overall background
    <DeviceOrientation lockOrientation={"landscape"}>
      <Orientation orientation="landscape" alwaysRender={false}>
        <Box
          background={{
            color: "",
            dark: true,
            opacity: true,
            position: "bottom",
            repeat: "no-repeat",
            size: "cover",
            image: "url(/static/media/backdrop.d50eb1b0.png)"
          }}
        >
          <Grommet theme={theme} full>
            <Introduction />
            <Tour />
          </Grommet>
        </Box>
      </Orientation>
      <Orientation orientation="portrait" alwaysRender={false}>
        <Box
          background={{
            color: "",
            dark: true,
            opacity: true,
            position: "bottom",
            repeat: "no-repeat",
            size: "cover",
            image: "url(/static/media/backdrop.d50eb1b0.png)"
          }}
        >
          <Grommet theme={theme} full>
            <ProtraitReminder />
          </Grommet>
        </Box>
      </Orientation>
    </DeviceOrientation>
  );
}

export default App;
