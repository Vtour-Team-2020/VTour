import React, { Fragment } from "react";
import { Box, Button, Layer } from "grommet";
import { CaretUp, CaretDown, CaretNext, CaretPrevious } from "grommet-icons";

import Media from "react-media";

class LeftActionBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      moveUp: false,
      moveDown: false,
      moveLeft: false,
      moveRight: false,
      showHelp: false,

      upButtonState: {}
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
          <Fragment>
            {matches.smallphones && (
              <Box
                justify="center"
                direction="column"
                alignSelf="center"
                justify="center"
                height="240px"
                background={{
                  color: "dark-1"
                }}
              >
                <Box align="center" direction="column">
                  <Button
                    icon={<CaretUp color="brand" />}
                    onClick={this.props.getUpActionUpdate}
                  ></Button>
                  <Button
                    icon={<CaretDown color="brand" />}
                    onClick={this.props.getDownActionUpdate}
                  ></Button>
                  <Button
                    icon={<CaretPrevious color="brand" />}
                    onClick={this.props.getLeftActionUpdate}
                  ></Button>
                  <Button
                    icon={<CaretNext color="brand" />}
                    onClick={this.props.getRightActionUpdate}
                  ></Button>
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
                background={{
                  color: "dark-1"
                }}
              >
                <Box align="center" direction="column">
                  <Button
                    icon={<CaretUp color="brand" />}
                    onClick={this.props.getUpActionUpdate}
                  ></Button>
                  <Button
                    icon={<CaretDown color="brand" />}
                    onClick={this.props.getDownActionUpdate}
                  ></Button>
                  <Button
                    icon={<CaretPrevious color="brand" />}
                    onClick={this.props.getLeftActionUpdate}
                  ></Button>
                  <Button
                    icon={<CaretNext color="brand" />}
                    onClick={this.props.getRightActionUpdate}
                  ></Button>
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
                background={{
                  color: "dark-1"
                }}
              >
                <Box align="center" direction="column">
                  <Button
                    icon={<CaretUp color="brand" />}
                    onClick={this.props.getUpActionUpdate}
                  ></Button>
                  <Button
                    icon={<CaretDown color="brand" />}
                    onClick={this.props.getDownActionUpdate}
                  ></Button>
                  <Button
                    icon={<CaretPrevious color="brand" />}
                    onClick={this.props.getLeftActionUpdate}
                  ></Button>
                  <Button
                    icon={<CaretNext color="brand" />}
                    onClick={this.props.getRightActionUpdate}
                  ></Button>
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
    this.setState(function() {
      return {
        showHelp: false
      };
    });
  }

  bindButtonStyles() {}
}

export default LeftActionBar;
