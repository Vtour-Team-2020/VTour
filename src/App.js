import React from "react";
import { Grommet, Box, Layer, Button, Heading, Text } from "grommet";
import { Run } from "grommet-icons"

import Introduction from "./components/Introduction";
import ProtraitReminder from "./ProtraitReminder";
import Tour from "./components/Tour";

import DeviceOrientation, { Orientation } from "react-screen-orientation";
import backdrop from "./components/blogic/resource/images/backdrop.png"

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
  const [show, setShow] = React.useState();
  return (
    // potentially bad practice by not utilising theme variable to set overall background
    <DeviceOrientation lockOrientation={"landscape"}>
      <Orientation orientation="landscape" alwaysRender={false}>
        {/* <Button label="show" onClick={() => setShow(true)} /> */}
        {!show && (
          <Layer
            onEsc={() => setShow(true)}
            onClickOutside={() => setShow(true)}
            responsive={false}
          >
            <Box pad="medium" gap="small" width="medium" background = "dark-1">
              <Heading level={3} margin="none">
                Welcome to <span style={{ color: "yellow", fontWeight: "bold" }}>Eusoff</span> Online!
              </Heading>
              <Text>Start by clicking the buttons that are highlighted!</Text>
              <Box
                as="footer"
                gap="small"
                direction="row"
                align="center"
                justify="end"
                pad={{ top: "medium", bottom: "small" }}
              >
                <Button icon={<Run />}label="Start Exploring" onClick={() => setShow(true)} />
              </Box>
            </Box>
          </Layer>
        )}
        <Box
          background={{
            color: "",
            dark: true,
            opacity: true,
            position: "bottom",
            repeat: "no-repeat",
            size: "cover",
            image: "url(" + backdrop + ")"
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
            image: "url(" + backdrop + ")"
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
