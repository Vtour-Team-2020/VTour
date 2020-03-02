import React, { Fragment } from "react";

import Media from "react-media";
import { Box, Button, Layer, Text } from "grommet";
import { Camera, CircleQuestion } from "grommet-icons";

class RightActionBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showHelp: false,
      showImage: false
    };

    this.activateHelp = this.activateHelp.bind(this);
    this.deactivateHelp = this.deactivateHelp.bind(this);
  }

  render() {
    return (
      <Media
        queries={{
            smallphones: "(max-width: 731px) and (max-height: 373px)",
            regularPhones: "(min-width: 731px) and (min-height: 374px) and (max-height: 600px)",
            large: "(min-width: 731px) and (min-height: 700px)"
        }}
      >
        {matches => (
          <Fragment> {/* For iphones and other mobile devices*/}
            {matches.smallphones && (
              <Box
                justify="center"
                direction="column"
                alignSelf="center"
                justify="center"
                height="240px"
                elevation="small"
                background={{
                  color: "dark-1"
                }}
              >
                <Box
                  align="center"
                  direction="column"
                  overflow={{ vertical: "scroll" }}
                >
                  <Button
                    icon={<CircleQuestion color="brand" />}
                    alignSelf="center"
                    onClick={this.activateHelp}
                  />
                  {this.state.showHelp && (
                    <Layer
                      onEsc={() => this.deactivateHelp()}
                      onClickOutside={() => this.deactivateHelp()}
                      position="center"
                      responsive={false}
                    ></Layer>
                  )}
                  <Button
                    icon={<Camera color="brand" />}
                    alignSelf="center"
                    onClick={this.activateHelp}
                  />
                  {this.state.showHelp && (
                    <Layer
                      onEsc={() => this.deactivateHelp()}
                      onClickOutside={() => this.deactivateHelp()}
                      position="center"
                    >
                      <Box height="3px" overflow="auto">
                        <Box>Corner top-right position</Box>
                      </Box>
                    </Layer>
                  )}
                </Box>
              </Box>
            )}

            {matches.regularPhones && (
              <Box
                justify="center"
                direction="column"
                alignSelf="center"
                justify="center"
                height="350px"
                elevation="small"
                background={{
                  color: "dark-1"
                }}
              >
                <Box
                  align="center"
                  direction="column"
                  overflow={{ vertical: "scroll" }}
                >
                  <Button
                    icon={<CircleQuestion color="brand" />}
                    alignSelf="center"
                    onClick={this.activateHelp}
                  />
                  {this.state.showHelp && (
                    <Layer
                      onEsc={() => this.deactivateHelp()}
                      onClickOutside={() => this.deactivateHelp()}
                      position="center"
                      responsive={false}
                    ></Layer>
                  )}
                  <Button
                    icon={<Camera color="brand" />}
                    alignSelf="center"
                    onClick={this.activateHelp}
                  />
                  {this.state.showHelp && (
                    <Layer
                      onEsc={() => this.deactivateHelp()}
                      onClickOutside={() => this.deactivateHelp()}
                      position="center"
                    >
                      <Box height="3px" overflow="auto">
                        <Box>Corner top-right position</Box>
                      </Box>
                    </Layer>
                  )}
                </Box>
              </Box>
            )}

            {matches.large && (
              <Box
                justify="center"
                direction="column"
                alignSelf="center"
                justify="center"
                height="618px"
                elevation="small"
                background={{
                  color: "dark-1"
                }}
              >
                <Box
                  align="center"
                  direction="column"
                  overflow={{ vertical: "scroll" }}
                >
                  <Button
                    icon={<CircleQuestion color="brand" />}
                    alignSelf="center"
                    onClick={this.activateHelp}
                  />
                  {this.state.showHelp && (
                    <Layer
                      onEsc={() => this.deactivateHelp()}
                      onClickOutside={() => this.deactivateHelp()}
                      position="center"
                      responsive={false}
                    ></Layer>
                  )}
                  <Button
                    icon={<Camera color="brand" />}
                    alignSelf="center"
                    onClick={this.activateHelp}
                  />
                  {this.state.showHelp && (
                    <Layer
                      onEsc={() => this.deactivateHelp()}
                      onClickOutside={() => this.deactivateHelp()}
                      position="center"
                    >
                      <Box height="3px" overflow="auto">
                        <Box>Corner top-right position</Box>
                      </Box>
                    </Layer>
                  )}
                </Box>
              </Box>
            )}
          </Fragment>
        )}
      </Media>
    );
  }
  activateHelp() {
    this.setState(function() {
      return {
        showHelp: true
      };
    });
  }

  deactivateHelp() {
    this.setState({
      showHelp: false
    });
  }

  activateImage() {
    this.setState(function() {
      return {
        showImage: true
      };
    });
  }

  deactiveImage() {
    this.setState({
      showImage: false
    });
  }
}

export default RightActionBar;
