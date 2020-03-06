import React, { Fragment } from "react";

import Media from "react-media";
import { Box, Button, Layer, Text, Image, List } from "grommet";
import { Info, FormClose, Projects, Waypoint } from "grommet-icons";

import mediaResource from "./blogic/MediaResource.js";

class RightActionBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showLocationDetail: false,
      showImage: false,
      showEvent: false,
      showMap: false
    };

    this.activateHelp = this.activateHelp.bind(this);
    this.deactivateHelp = this.deactivateHelp.bind(this);

    this.activateImage = this.activateImage.bind(this);
    this.deactivateHelp = this.deactivateHelp.bind(this);

    this.activateEvent = this.activateEvent.bind(this);
    this.deactivateEvent = this.deactivateEvent.bind(this);

    this.activateMap = this.activateMap.bind(this);
    this.deactivateMap = this.deactivateMap.bind(this);

    this.jump = this.jump.bind(this);
  }

  render() {

    // const MapList = mediaResource.mapList;
    const MapList = mediaResource.mapList;



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
            {/* Start of the small phone component */}
            {matches.smallphones &&
              (this.props.onRightBar ? (
                <Box
                  justify="center"
                  direction="column"
                  alignSelf="center"
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
                      icon={<Info color="brand" />}
                      alignSelf="center"
                      onClick={this.activateHelp}
                    />
                    {this.state.showLocationDetail && (
                      <Layer
                        onEsc={() => this.deactivateHelp()}
                        onClickOutside={() => this.deactivateHelp()}
                        position="bottom"
                        modal={true}
                        responsive={false}
                        margin={{ vertical: "medium", horizontal: "small" }}
                      >
                        <Box
                          height="25px"
                          width="400px"
                          direction="row"
                          gap="small"
                          align="center"
                          background="dark-3"
                        >
                          <Box
                            alignSelf="center"
                            direction="row"
                            pad={{
                              left: "10px"
                            }}
                            width="90%"
                            justify="start"
                          >
                            <Text size="small">Juice</Text>
                          </Box>
                          <Button
                            direction="row"
                            alignSelf="center"
                            width="10%"
                            justify="center"
                            icon={<FormClose size="medium" />}
                            onClick={() => this.deactivateHelp()}
                          />
                        </Box>
                        <Box
                          height="90px"
                          width="400px"
                          align="center"
                          direction="column"
                          justify="between"
                          round="medium"
                          elevation="medium"
                          pad={{ horizontal: "small" }}
                          overflow={{ vertical: "scroll" }}
                        >
                          <Box align="start" direction="row">
                            <Text>{this.props.juice}</Text>
                          </Box>
                        </Box>
                      </Layer>
                    )}

                    <Button
                      icon={<Waypoint color="brand" />}
                      alignSelf="center"
                      onClick={this.activateMap}
                    />
                    {this.state.showMap && (
                      <Layer
                        onEsc={() => this.deactivateMap()}
                        onClickOutside={() => this.deactivateMap()}
                        position="bottom"
                        modal={true}
                        responsive={false}
                        margin={{ vertical: "medium", horizontal: "small" }}
                      >
                        <Box
                          height="25px"
                          width="450px"
                          direction="row"
                          gap="small"
                          align="center"
                          background="dark-3"
                        >
                          <Box
                            alignSelf="center"
                            direction="row"
                            pad={{
                              left: "10px"
                            }}
                            width="90%"
                            justify="start"
                          >
                            <Text size="small">Jump to a location</Text>
                          </Box>
                          <Button
                            direction="row"
                            alignSelf="center"
                            width="10%"
                            justify="center"
                            icon={<FormClose size="medium" />}
                            onClick={() => this.deactivateMap()}
                          />
                        </Box>
                        <Box
                          height="270px"
                          width="450px"
                          align="center"
                          direction="column"
                          gap="small"
                          justify="between"
                          round="medium"
                          elevation="medium"
                          pad={{ vertical: "xsmall", horizontal: "small" }}
                          overflow={{ vertical: "scroll" }}
                        >
                          <List data={MapList}>
                            {(datum, index) => (
                              <Box
                                key={index}
                                direction="column"
                                pad="medium"
                                align="center"
                              >
                                <Box
                                  // width="370px"
                                  height="170px"
                                >
                                  <Image src={datum.Key} fit="contain" />
                                </Box>
                                <Box
                                  width="340px"
                                  justify="center"
                                  align="center"
                                  margin="xsmall"
                                >
                                  <Button
                                    icon={<Waypoint size="medium" />}
                                    label={
                                      <Text weight="bold">
                                        {"Jump to " + datum.Name}
                                      </Text>
                                    }
                                    onClick={() => this.jump(datum.Key)}
                                  ></Button>
                                </Box>
                              </Box>
                            )}
                          </List>
                        </Box>
                      </Layer>
                    )}

                    {this.props.hasEvent ? (
                      <Button
                        icon={<Projects color="yellow" />}
                        alignSelf="center"
                        onClick={this.activateEvent}
                      />
                    ) : (
                      <Button
                        icon={<Projects color="dark-3" />}
                        alignSelf="center"
                      />
                    )}

                    {this.state.showEvent && (
                      <Layer
                        onEsc={() => this.deactivateEvent()}
                        onClickOutside={() => this.deactivateEvent()}
                        position="bottom"
                        modal={true}
                        responsive={false}
                        margin={{ vertical: "medium", horizontal: "small" }}
                      >
                        <Box
                          height="25px"
                          width="450px"
                          direction="row"
                          gap="small"
                          align="center"
                          background="dark-3"
                        >
                          <Box
                            alignSelf="center"
                            direction="row"
                            pad={{
                              left: "10px"
                            }}
                            width="90%"
                            justify="start"
                          >
                            <Text size="small">More about this place</Text>
                          </Box>
                          <Button
                            direction="row"
                            alignSelf="center"
                            width="10%"
                            justify="center"
                            icon={<FormClose size="medium" />}
                            onClick={() => this.deactivateEvent()}
                          />
                        </Box>
                        <Box
                          height="270px"
                          width="450px"
                          align="center"
                          direction="column"
                          gap="small"
                          justify="between"
                          round="medium"
                          elevation="medium"
                          pad={{ vertical: "xsmall", horizontal: "small" }}
                          overflow={{ vertical: "scroll" }}
                        >
                          <List data={this.props.eventList}>
                            {(datum, index) => (
                              <Box
                                key={index}
                                direction="column"
                                pad="medium"
                                align="center"
                              >
                                <Box
                                  // width="370px"
                                  height="170px"
                                >
                                  <Image src={datum.Image} fit="contain" />
                                </Box>
                                <Box
                                  width="340px"
                                  justify="center"
                                  align="center"
                                  margin="xsmall"
                                >
                                  <Text weight="bold">{datum.Caption}</Text>
                                </Box>
                              </Box>
                            )}
                          </List>
                        </Box>
                      </Layer>
                    )}
                  </Box>
                </Box>
              ) : (
                <Box
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
                    <Button icon={<Info color="dark-3" />} alignSelf="center" />
                    <Button
                      icon={<Waypoint color="dark-3" />}
                      alignSelf="center"
                    />
                    <Button
                      icon={<Projects color="dark-3" />}
                      alignSelf="center"
                    />
                  </Box>
                </Box>
              ))}
            {/* End of the small phone component */}

            {/* Start of regular phone component */}
            {matches.regularPhones &&
              (this.props.onRightBar ? (
                <Box
                  direction="column"
                  alignSelf="center"
                  justify="center"
                  height="310px"
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
                      icon={<Info color="brand" />}
                      alignSelf="center"
                      onClick={this.activateHelp}
                    />
                    {this.state.showLocationDetail && (
                      <Layer
                        onEsc={() => this.deactivateHelp()}
                        onClickOutside={() => this.deactivateHelp()}
                        position="bottom"
                        modal={true}
                        responsive={false}
                        margin={{ vertical: "medium", horizontal: "small" }}
                      >
                        <Box
                          height="25px"
                          width="500px"
                          direction="row"
                          gap="small"
                          align="center"
                          background="dark-3"
                        >
                          <Box
                            alignSelf="center"
                            direction="row"
                            pad={{
                              left: "10px"
                            }}
                            width="90%"
                            justify="start"
                          >
                            <Text size="small">Juice</Text>
                          </Box>
                          <Button
                            direction="row"
                            alignSelf="center"
                            width="10%"
                            justify="center"
                            icon={<FormClose size="medium" />}
                            onClick={() => this.deactivateHelp()}
                          />
                        </Box>
                        <Box
                          height="90px"
                          width="500px"
                          align="center"
                          direction="column"
                          justify="between"
                          round="medium"
                          elevation="medium"
                          pad={{ horizontal: "small" }}
                          overflow={{ vertical: "scroll" }}
                        >
                          <Box align="start" direction="row">
                            <Text>{this.props.juice}</Text>
                          </Box>
                        </Box>
                      </Layer>
                    )}

                    <Button
                      icon={<Waypoint color="brand" />}
                      alignSelf="center"
                      onClick={this.activateMap}
                    />
                    {this.state.showMap && (
                      <Layer
                        onEsc={() => this.deactivateMap()}
                        onClickOutside={() => this.deactivateMap()}
                        position="bottom"
                        modal={true}
                        responsive={false}
                        margin={{ vertical: "medium", horizontal: "small" }}
                      >
                        <Box
                          height="25px"
                          width="450px"
                          direction="row"
                          gap="small"
                          align="center"
                          background="dark-3"
                        >
                          <Box
                            alignSelf="center"
                            direction="row"
                            pad={{
                              left: "10px"
                            }}
                            width="90%"
                            justify="start"
                          >
                            <Text size="small">Quick Jump to a location</Text>
                          </Box>
                          <Button
                            direction="row"
                            alignSelf="center"
                            width="10%"
                            justify="center"
                            icon={<FormClose size="medium" />}
                            onClick={() => this.deactivateMap()}
                          />
                        </Box>
                        <Box
                          height="270px"
                          width="450px"
                          align="center"
                          direction="column"
                          gap="small"
                          justify="between"
                          round="medium"
                          elevation="medium"
                          pad={{ vertical: "xsmall", horizontal: "small" }}
                          overflow={{ vertical: "scroll" }}
                        >
                          <List data={MapList}>
                            {(datum, index) => (
                              <Box
                                key={index}
                                direction="column"
                                pad="medium"
                                align="center"
                              >
                                <Box
                                  // width="370px"
                                  height="170px"
                                >
                                  <Image src={datum.Image} fit="contain" />
                                </Box>
                                <Box
                                  width="340px"
                                  justify="center"
                                  align="center"
                                  margin="xsmall"
                                >
                                  <Button
                                    icon={<Waypoint size="medium" />}
                                    label={
                                      <Text weight="bold">
                                        {"Jump to " + datum.Name}
                                      </Text>
                                    }
                                    onClick={() => this.jump(datum.Key)}
                                  ></Button>
                                </Box>
                              </Box>
                            )}
                          </List>
                        </Box>
                      </Layer>
                    )}

                    {this.props.hasEvent ? (
                      <Button
                        icon={<Projects color="yellow" />}
                        alignSelf="center"
                        onClick={this.activateEvent}
                      />
                    ) : (
                      <Button
                        icon={<Projects color="dark-3" />}
                        alignSelf="center"
                      />
                    )}

                    {this.state.showEvent && (
                      <Layer
                        onEsc={() => this.deactivateEvent()}
                        onClickOutside={() => this.deactivateEvent()}
                        position="bottom"
                        modal={true}
                        responsive={false}
                        margin={{ vertical: "medium", horizontal: "small" }}
                      >
                        <Box
                          height="25px"
                          width="450px"
                          direction="row"
                          gap="small"
                          align="center"
                          background="dark-3"
                        >
                          <Box
                            alignSelf="center"
                            direction="row"
                            pad={{
                              left: "10px"
                            }}
                            width="90%"
                            justify="start"
                          >
                            <Text size="small">More about this place</Text>
                          </Box>
                          <Button
                            direction="row"
                            alignSelf="center"
                            width="10%"
                            justify="center"
                            icon={<FormClose size="medium" />}
                            onClick={() => this.deactivateEvent()}
                          />
                        </Box>
                        <Box
                          height="270px"
                          width="450px"
                          align="center"
                          direction="column"
                          gap="small"
                          justify="between"
                          round="medium"
                          elevation="medium"
                          pad={{ vertical: "xsmall", horizontal: "small" }}
                          overflow={{ vertical: "scroll" }}
                        >
                          <List data={this.props.eventList}>
                            {(datum, index) => (
                              <Box
                                key={index}
                                direction="column"
                                pad="medium"
                                align="center"
                              >
                                <Box
                                  // width="370px"
                                  height="170px"
                                >
                                  <Image src={datum.Image} fit="contain" />
                                </Box>
                                <Box
                                  width="340px"
                                  justify="center"
                                  align="center"
                                  margin="xsmall"
                                >
                                  <Text weight="bold">{datum.Caption}</Text>
                                </Box>
                              </Box>
                            )}
                          </List>
                        </Box>
                      </Layer>
                    )}
                  </Box>
                </Box>
              ) : (
                // Or right bar is not activated
                <Box
                  justify="center"
                  direction="column"
                  alignSelf="center"
                  height="310px"
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
                    <Button icon={<Info color="dark-3" />} alignSelf="center" />
                    <Button
                      icon={<Waypoint color="dark-3" />}
                      alignSelf="center"
                    />
                    <Button
                      icon={<Projects color="dark-3" />}
                      alignSelf="center"
                    />
                  </Box>
                </Box>
              ))}

            {/* The large component */}
            {(matches.large || matches.desktop) &&
              (this.props.onRightBar ? (
                <Box
                  direction="column"
                  alignSelf="center"
                  justify="center"
                  height="454px"
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
                      icon={<Info color="brand" />}
                      alignSelf="center"
                      onClick={this.activateHelp}
                    />
                    {this.state.showLocationDetail && (
                      <Layer
                        onEsc={() => this.deactivateHelp()}
                        onClickOutside={() => this.deactivateHelp()}
                        position="center"
                        modal={true}
                        responsive={false}
                        margin={{ vertical: "medium", horizontal: "small" }}
                      >
                        <Box
                          height="25px"
                          width="500PX"
                          direction="row"
                          gap="small"
                          align="center"
                          background="dark-3"
                        >
                          <Box
                            alignSelf="center"
                            direction="row"
                            pad={{
                              left: "10px"
                            }}
                            width="90%"
                            justify="start"
                          >
                            <Text size="small">Juice</Text>
                          </Box>
                          <Button
                            direction="row"
                            alignSelf="center"
                            width="10%"
                            justify="center"
                            icon={<FormClose size="medium" />}
                            onClick={() => this.deactivateHelp()}
                          />
                        </Box>
                        <Box
                          height="100px"
                          width="500px"
                          align="center"
                          direction="column"
                          justify="between"
                          round="medium"
                          elevation="medium"
                          pad={{ horizontal: "small" }}
                          overflow={{ vertical: "scroll" }}
                        >
                          <Box align="start" direction="row">
                            <Text>{this.props.juice}</Text>
                          </Box>
                        </Box>
                      </Layer>
                    )}

                    <Button
                      icon={<Waypoint color="brand" />}
                      alignSelf="center"
                      onClick={this.activateMap}
                    />
                    {this.state.showMap && (
                      <Layer
                        onEsc={() => this.deactivateMap()}
                        onClickOutside={() => this.deactivateMap()}
                        position="center"
                        modal={true}
                        responsive={false}
                        margin={{ vertical: "medium", horizontal: "small" }}
                      >
                        <Box
                          height="25px"
                          width="700px"
                          direction="row"
                          gap="small"
                          align="center"
                          background="dark-3"
                        >
                          <Box
                            alignSelf="center"
                            direction="row"
                            pad={{
                              left: "10px"
                            }}
                            width="90%"
                            justify="start"
                          >
                            <Text size="small">Jump to a location</Text>
                          </Box>
                          <Button
                            direction="row"
                            alignSelf="center"
                            width="10%"
                            justify="center"
                            icon={<FormClose size="medium" />}
                            onClick={() => this.deactivateMap()}
                          />
                        </Box>
                        <Box
                          height="500px"
                          width="700px"
                          align="center"
                          direction="column"
                          gap="small"
                          justify="between"
                          round="medium"
                          elevation="medium"
                          pad={{ vertical: "xsmall", horizontal: "small" }}
                          overflow={{ vertical: "scroll" }}
                        >
                          <List data={MapList}>
                            {(datum, index) => (
                              <Box
                                key={index}
                                direction="column"
                                pad="medium"
                                align="center"
                              >
                                <Box
                                  // width="370px"
                                  height="170px"
                                >
                                  <Image src={datum.Image} fit="contain" />
                                </Box>
                                <Box
                                  width="340px"
                                  justify="center"
                                  align="center"
                                  margin="xsmall"
                                >
                                  <Button
                                    icon={<Waypoint size="medium" />}
                                    label={
                                      <Text weight="bold">
                                        {"Jump to " + datum.Name}
                                      </Text>
                                    }
                                    onClick={() => this.jump(datum.Key)}
                                  ></Button>
                                </Box>
                              </Box>
                            )}
                          </List>
                        </Box>
                      </Layer>
                    )}

                    {this.props.hasEvent ? (
                      <Button
                        icon={<Projects color="yellow" />}
                        alignSelf="center"
                        onClick={this.activateEvent}
                      />
                    ) : (
                      <Button
                        icon={<Projects color="dark-3" />}
                        alignSelf="center"
                      />
                    )}

                    {this.state.showEvent && (
                      <Layer
                        onEsc={() => this.deactivateEvent()}
                        onClickOutside={() => this.deactivateEvent()}
                        position="center"
                        modal={true}
                        responsive={false}
                        margin={{ vertical: "medium", horizontal: "small" }}
                      >
                        <Box
                          height="35px"
                          width="750px"
                          direction="row"
                          gap="small"
                          align="center"
                          background="dark-3"
                        >
                          <Box
                            alignSelf="center"
                            direction="row"
                            pad={{
                              left: "10px"
                            }}
                            width="90%"
                            justify="start"
                          >
                            <Text size="small">More about this place</Text>
                          </Box>
                          <Button
                            direction="row"
                            alignSelf="center"
                            width="10%"
                            justify="center"
                            icon={<FormClose size="medium" />}
                            onClick={() => this.deactivateEvent()}
                          />
                        </Box>
                        <Box
                          height="600px"
                          width="750px"
                          align="center"
                          direction="column"
                          gap="small"
                          justify="between"
                          round="medium"
                          elevation="medium"
                          pad={{ vertical: "xsmall", horizontal: "small" }}
                          overflow={{ vertical: "scroll" }}
                        >
                          <List data={this.props.eventList}>
                            {(datum, index) => (
                              <Box
                                key={index}
                                direction="column"
                                pad="medium"
                                align="center"
                              >
                                <Box
                                  // width="370px"
                                  height="300px"
                                >
                                  <Image src={datum.Image} fit="contain" />
                                </Box>
                                <Box
                                  width="340px"
                                  justify="center"
                                  align="center"
                                  margin="xsmall"
                                >
                                  <Text weight="bold">{datum.Caption}</Text>
                                </Box>
                              </Box>
                            )}
                          </List>
                        </Box>
                      </Layer>
                    )}
                  </Box>
                </Box>
              ) : (
                <Box
                  direction="column"
                  alignSelf="center"
                  justify="center"
                  height="454px"
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
                    <Button icon={<Info color="dark-3" />} alignSelf="center" />
                    <Button
                      icon={<Waypoint color="dark-3" />}
                      alignSelf="center"
                    />
                    <Button
                      icon={<Projects color="dark-3" />}
                      alignSelf="center"
                    />
                  </Box>
                </Box>
              ))}
          </Fragment>
        )}
      </Media>
    );
  }
  activateHelp() {
    this.setState(function() {
      return {
        showLocationDetail: true
      };
    });
  }

  deactivateHelp() {
    this.setState({
      showLocationDetail: false
    });
  }

  activateImage() {
    this.setState(function() {
      return {
        showImage: true
      };
    });
  }

  deactivateImage() {
    this.setState({
      showImage: false
    });
  }

  activateEvent() {
    this.setState({ showEvent: true });
  }

  deactivateEvent() {
    this.setState({ showEvent: false });
  }

  activateMap() {
    this.setState({ showMap: true });
  }

  deactivateMap() {
    this.setState({ showMap: false });
  }

  jump(location) {
    this.deactivateMap();
    this.props.getJumpLocationUpdate(location);
  }
}

export default RightActionBar;