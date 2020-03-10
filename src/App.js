import React from "react";
import { Grommet, Box, Layer, Button, Heading, Text } from "grommet";
import {
  Run,
  CaretUp,
  CaretDown,
  CaretNext,
  CaretPrevious,
  Info,
  Waypoint,
  Projects
} from "grommet-icons";

import Introduction from "./components/Introduction";
import ProtraitReminder from "./ProtraitReminder";
import Tour from "./components/Tour";

import DeviceOrientation, { Orientation } from "react-screen-orientation";
import backdrop from "./components/blogic/resource/images/backdrop.png";

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
  const [show2, setShow2] = React.useState();
  const [show3, setShow3] = React.useState();
  const [show4, setShow4] = React.useState();

  return (
    // potentially bad practice by not utilising theme variable to set overall background
    <DeviceOrientation lockOrientation={"landscape"}>
      <Orientation orientation="landscape" alwaysRender={false}>
        {!show && (
          <Layer
            onEsc={() => {
              setShow(true);
              setShow2(true);
            }}
            onClickOutside={() => {
              setShow(true);
              setShow2(true);
            }}
            responsive={false}
          >
            <Box pad="medium" gap="small" width="medium" background="dark-1">
              <Heading level={3} margin="none">
                Welcome to{" "}
                <span style={{ color: "yellow", fontWeight: "bold" }}>
                  Eusoff
                </span>{" "}
                Online!
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
                <Button
                  icon={<CaretNext />}
                  label="Next"
                  onClick={() => {
                    setShow(true);
                    setShow2(true);
                  }}
                />
              </Box>
            </Box>
          </Layer>
        )}
        {show2 && (
          <Layer
            position="center"
            onEsc={() => {
              setShow2(false);
              setShow3(true);
            }}
            onClickOutside={() => {
              setShow2(false);
              setShow3(true);
            }}
            responsive={false}
          >
            <Box pad="medium" gap="small" width="medium" background="dark-1">
              <Heading level={4} margin="none">
                Walk around Eusoff using these on the left
              </Heading>
              <Text>
                <CaretUp size="medium" /> Up
              </Text>
              <Text>
                <CaretDown /> Back
              </Text>
              <Text>
                <CaretPrevious /> Left
              </Text>
              <Text>
                <CaretNext /> Right
              </Text>
              <Box
                as="footer"
                gap="small"
                direction="row"
                align="center"
                justify="end"
                pad={{ top: "medium", bottom: "small" }}
              >
                <Button
                  icon={<CaretNext />}
                  label="Next"
                  onClick={() => {
                    setShow2(false);
                    setShow3(true);
                  }}
                />
              </Box>
            </Box>
          </Layer>
        )}
        {show3 && (
          <Layer
            position="center"
            onEsc={() => {
              setShow3(false);
              setShow4(true);
            }}
            onClickOutside={() => {
              setShow3(false);
              setShow4(true);
            }}
            responsive={false}
          >
            <Box pad="medium" gap="small" width="medium" background="dark-1">
            <Heading level={4} margin="none">
                More buttons on the right - 
              </Heading>
              <Text>
              <Info size="medium" />  Juicy facts
              </Text>
              <Text>
              <Waypoint size="medium" />  Jump to a location
              </Text>
              <Text>
              <Projects/>  Highlights!
              </Text>
              <Box
                as="footer"
                gap="small"
                direction="row"
                align="center"
                justify="end"
                pad={{ top: "medium", bottom: "small" }}
              >
                <Button
                  icon={<CaretNext />}
                  label="Next"
                  onClick={() => {
                    setShow3(false);
                    setShow4(true);
                  }}
                />
              </Box>
            </Box>
          </Layer>
        )}
        {show4 && (
          <Layer
            position="center"
            onEsc={() => {
              setShow4(false);
            }}
            onClickOutside={() => {
              setShow4(false);
            }}
            responsive={false}
          >
            <Box pad="medium" gap="small" width="medium" background="dark-1">
            <Heading level={4} margin="none">
              There could be some latency while animations are being loaded :(
            </Heading>

              <Box
                as="footer"
                gap="small"
                direction="row"
                align="center"
                justify="end"
                pad={{ top: "medium", bottom: "small" }}
              >
                <Button
                  icon={<Run />}
                  label="It's alright, let's go!"
                  onClick={() => {
                    setShow4(false);
                  }}
                />
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
