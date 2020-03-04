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
    console.log(this.props);
    // this.setState({
    //     moveUp : this.props.accessibleDirections.canMoveup
    // })
    return (
      <Media
        queries={{
          smallphones: "(max-height: 373px)",
          regularPhones: "(min-height: 374px) and (max-height: 600px)",
          large:
            "(min-width: 731px) and (min-height: 700px) and (max-width:1025px) and (max-height:768px)",
          desktop: "(min-width: 1026px) and (min-height: 769px)"
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
                {this.props.onLeftBar && (
                  <Box align="center" direction="column">
                    {this.props.canMoveUp ? (
                      <Button
                        icon={<CaretUp color="brand" />}
                        onClick={this.props.getUpActionUpdate}
                      ></Button>
                    ) : (
                      <Button icon={<CaretUp color="dark-3" />}></Button>
                    )}
                    {this.props.canMoveDown ? (
                      <Button
                        icon={<CaretDown color="brand" />}
                        onClick={this.props.getDownActionUpdate}
                      ></Button>
                    ) : (
                      <Button icon={<CaretDown color="dark-3" />}></Button>
                    )}

                    {this.props.canMoveLeft ? (
                      <Button
                        icon={<CaretPrevious color="brand" />}
                        onClick={this.props.getLeftActionUpdate}
                      ></Button>
                    ) : (
                      <Button icon={<CaretPrevious color="dark-3" />}></Button>
                    )}
                    {this.props.canMoveRight ? (
                      <Button
                        icon={<CaretNext color="brand" />}
                        onClick={this.props.getRightActionUpdate}
                      ></Button>
                    ) : (
                      <Button icon={<CaretNext color="dark-3" />}></Button>
                    )}
                  </Box>
                )}
                {!this.props.onLeftBar && (
                  <Box align="center" direction="column">
                    <Button icon={<CaretUp color="dark-3" />}></Button>
                    <Button icon={<CaretDown color="dark-3" />}></Button>
                    <Button icon={<CaretPrevious color="dark-3" />}></Button>
                    <Button icon={<CaretNext color="dark-3" />}></Button>
                  </Box>
                )}
              </Box>
            )}
            {matches.regularPhones && (
              <Box
                justify="center"
                direction="column"
                alignSelf="center"
                justify="center"
                height="310px"
                background={{
                  color: "dark-1"
                }}
              >
                {this.props.onLeftBar && (
                  <Box align="center" direction="column">
                    {this.props.canMoveUp ? (
                      <Button
                        icon={<CaretUp color="brand" />}
                        onClick={this.props.getUpActionUpdate}
                      ></Button>
                    ) : (
                      <Button icon={<CaretUp color="dark-3" />}></Button>
                    )}
                    {this.props.canMoveDown ? (
                      <Button
                        icon={<CaretDown color="brand" />}
                        onClick={this.props.getDownActionUpdate}
                      ></Button>
                    ) : (
                      <Button icon={<CaretDown color="dark-3" />}></Button>
                    )}

                    {this.props.canMoveLeft ? (
                      <Button
                        icon={<CaretPrevious color="brand" />}
                        onClick={this.props.getLeftActionUpdate}
                      ></Button>
                    ) : (
                      <Button icon={<CaretPrevious color="dark-3" />}></Button>
                    )}
                    {this.props.canMoveRight ? (
                      <Button
                        icon={<CaretNext color="brand" />}
                        onClick={this.props.getRightActionUpdate}
                      ></Button>
                    ) : (
                      <Button icon={<CaretNext color="dark-3" />}></Button>
                    )}
                  </Box>
                )}
                {!this.props.onLeftBar && (
                  <Box align="center" direction="column">
                    <Button icon={<CaretUp color="dark-3" />}></Button>
                    <Button icon={<CaretDown color="dark-3" />}></Button>
                    <Button icon={<CaretPrevious color="dark-3" />}></Button>
                    <Button icon={<CaretNext color="dark-3" />}></Button>
                  </Box>
                )}
              </Box>
            )}
            {matches.large && (
              <Box
                justify="center"
                direction="column"
                alignSelf="center"
                justify="center"
                height="505px"
                background={{
                  color: "dark-1"
                }}
              >
                {this.props.onLeftBar && (
                  <Box align="center" direction="column">
                    {this.props.canMoveUp ? (
                      <Button
                        icon={<CaretUp color="brand" />}
                        onClick={this.props.getUpActionUpdate}
                      ></Button>
                    ) : (
                      <Button icon={<CaretUp color="dark-3" />}></Button>
                    )}
                    {this.props.canMoveDown ? (
                      <Button
                        icon={<CaretDown color="brand" />}
                        onClick={this.props.getDownActionUpdate}
                      ></Button>
                    ) : (
                      <Button icon={<CaretDown color="dark-3" />}></Button>
                    )}

                    {this.props.canMoveLeft ? (
                      <Button
                        icon={<CaretPrevious color="brand" />}
                        onClick={this.props.getLeftActionUpdate}
                      ></Button>
                    ) : (
                      <Button icon={<CaretPrevious color="dark-3" />}></Button>
                    )}
                    {this.props.canMoveRight ? (
                      <Button
                        icon={<CaretNext color="brand" />}
                        onClick={this.props.getRightActionUpdate}
                      ></Button>
                    ) : (
                      <Button icon={<CaretNext color="dark-3" />}></Button>
                    )}
                  </Box>
                )}
                {!this.props.onLeftBar && (
                  <Box align="center" direction="column">
                    <Button icon={<CaretUp color="dark-3" />}></Button>
                    <Button icon={<CaretDown color="dark-3" />}></Button>
                    <Button icon={<CaretPrevious color="dark-3" />}></Button>
                    <Button icon={<CaretNext color="dark-3" />}></Button>
                  </Box>
                )}
              </Box>
            )}
            {matches.desktop && (
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
                {this.props.onLeftBar && (
                  <Box align="center" direction="column">
                    {this.props.canMoveUp ? (
                      <Button
                        icon={<CaretUp color="brand" />}
                        onClick={this.props.getUpActionUpdate}
                      ></Button>
                    ) : (
                      <Button icon={<CaretUp color="dark-3" />}></Button>
                    )}
                    {this.props.canMoveDown ? (
                      <Button
                        icon={<CaretDown color="brand" />}
                        onClick={this.props.getDownActionUpdate}
                      ></Button>
                    ) : (
                      <Button icon={<CaretDown color="dark-3" />}></Button>
                    )}

                    {this.props.canMoveLeft ? (
                      <Button
                        icon={<CaretPrevious color="brand" />}
                        onClick={this.props.getLeftActionUpdate}
                      ></Button>
                    ) : (
                      <Button icon={<CaretPrevious color="dark-3" />}></Button>
                    )}
                    {this.props.canMoveRight ? (
                      <Button
                        icon={<CaretNext color="brand" />}
                        onClick={this.props.getRightActionUpdate}
                      ></Button>
                    ) : (
                      <Button icon={<CaretNext color="dark-3" />}></Button>
                    )}
                  </Box>
                )}
                {!this.props.onLeftBar && (
                  <Box align="center" direction="column">
                    <Button icon={<CaretUp color="dark-3" />}></Button>
                    <Button icon={<CaretDown color="dark-3" />}></Button>
                    <Button icon={<CaretPrevious color="dark-3" />}></Button>
                    <Button icon={<CaretNext color="dark-3" />}></Button>
                  </Box>
                )}
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

  componentDidMount() {
    console.log("left did mount");
  }

  componentDidUpdate() {
    console.log("left updated");
  }
}

export default LeftActionBar;
