import React, { Fragment } from "react";

import Media from "react-media";
import { Box, Button, Layer, Text, Image, List } from "grommet";
import { Camera, CircleQuestion, FormClose } from "grommet-icons";

import test from "../blogic/resource/images/backdrop.png";

class RightActionBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showHelp: false,
      showImage: false
    };

    this.activateHelp = this.activateHelp.bind(this);
    this.deactivateHelp = this.deactivateHelp.bind(this);
    this.activateImage = this.activateImage.bind(this);
    this.deactivateHelp = this.deactivateHelp.bind(this);
  }

  render() {
    const TestList = [
      {
        url: test,
        caption:
          "caption 1, it could be very long like this it could be very long like this it could be very long like this"
      },
      { url: test, caption: "caption 2" }
    ];

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
            {" "}
            {/* For iphones and other mobile devices*/}
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
                        height="70px"
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
                          <Text>
                            Some nice juice supplied by JCRC like monica baey
                            Some nice juice supplied by JCRC like monica baey
                            Some nice juice supplied by JCRC like monica baey
                            Some nice juice supplied by JCRC like monica baey
                            Some nice juice supplied by JCRC like monica baey
                          </Text>
                        </Box>
                      </Box>
                    </Layer>
                  )}
                  <Button
                    icon={<Camera color="brand" />}
                    alignSelf="center"
                    onClick={this.activateImage}
                  />
                  {this.state.showImage && (
                    <Layer
                      onEsc={() => this.deactivateImage()}
                      onClickOutside={() => this.deactivateImage()}
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
                          <Text size="small">Snap</Text>
                        </Box>
                        <Button
                          direction="row"
                          alignSelf="center"
                          width="10%"
                          justify="center"
                          icon={<FormClose size="medium" />}
                          onClick={() => this.deactivateImage()}
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
                        <Box align="center" direction="column" gap="small">
                          <List data={TestList}>
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
                                  <Image src={datum.url} fit="contain" />
                                </Box>
                                <Box width="340px">
                                  <Text weight="bold">{datum.caption}</Text>
                                </Box>
                              </Box>
                            )}
                          </List>
                        </Box>
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
                    icon={<CircleQuestion color="brand" />}
                    alignSelf="center"
                    onClick={this.activateHelp}
                  />
                  {this.state.showHelp && (
                    <Layer
                      onEsc={() => this.deactivateHelp()}
                      onClickOutside={() => this.deactivateHelp()}
                      position="bottom"
                      modal={true}
                      responsive={false}
                      margin={{ vertical: "medium", horizontal: "small" }}
                    >
                      <Box
                        height="30px"
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
                        height="80px"
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
                          <Text>
                            Some nice juice supplied by JCRC like monica baey
                            Some nice juice supplied by JCRC like monica baey
                            Some nice juice supplied by JCRC like monica baey
                            Some nice juice supplied by JCRC like monica baey
                            Some nice juice supplied by JCRC like monica baey
                          </Text>
                        </Box>
                      </Box>
                    </Layer>
                  )}
                  <Button
                    icon={<Camera color="brand" />}
                    alignSelf="center"
                    onClick={this.activateImage}
                  />
                  {this.state.showImage && (
                    <Layer
                      onEsc={() => this.deactivateImage()}
                      onClickOutside={() => this.deactivateImage()}
                      position="bottom"
                      modal={true}
                      responsive={false}
                      margin={{ vertical: "medium", horizontal: "small" }}
                    >
                      <Box
                        height="25px"
                        width="610px"
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
                          <Text size="small">Snap</Text>
                        </Box>
                        <Button
                          direction="row"
                          alignSelf="center"
                          width="10%"
                          justify="center"
                          icon={<FormClose size="medium" />}
                          onClick={() => this.deactivateImage()}
                        />
                      </Box>
                      <Box
                        height="320px"
                        width="610px"
                        align="center"
                        direction="column"
                        gap="small"
                        justify="between"
                        round="medium"
                        elevation="medium"
                        pad={{ vertical: "xsmall", horizontal: "small" }}
                        overflow={{ vertical: "scroll" }}
                      >
                        <Box align="center" direction="column" gap="small">
                          <List data={TestList}>
                            {(datum, index) => (
                              <Box
                                key={index}
                                direction="column"
                                pad="medium"
                                align="center"
                              >
                                <Box height="210px">
                                  <Image src={datum.url} fit="contain" />
                                </Box>
                                <Box width="500px">
                                  <Text weight="bold">{datum.caption}</Text>
                                </Box>
                              </Box>
                            )}
                          </List>
                        </Box>
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
                height="505px"
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
                      position="bottom"
                      modal={true}
                      responsive={false}
                      margin={{ vertical: "large" }}
                    >
                      <Box
                        height="40px"
                        width="780px"
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
                        width="780px"
                        align="center"
                        direction="column"
                        justify="between"
                        round="medium"
                        elevation="medium"
                        pad={{ horizontal: "small" }}
                        overflow={{ vertical: "scroll" }}
                      >
                        <Box align="start" direction="row">
                          <Text>
                            Some nice juice supplied by JCRC like monica baey
                            Some nice juice supplied by JCRC like monica baey
                            Some nice juice supplied by JCRC like monica baey
                            Some nice juice supplied by JCRC like monica baey
                            Some nice juice supplied by JCRC like monica baey
                          </Text>
                        </Box>
                      </Box>
                    </Layer>
                  )}
                  <Button
                    icon={<Camera color="brand" />}
                    alignSelf="center"
                    onClick={this.activateImage}
                  />
                  {this.state.showImage && (
                    <Layer
                      onEsc={() => this.deactivateImage()}
                      onClickOutside={() => this.deactivateImage()}
                      position="center"
                      modal={true}
                      responsive={false}
                    >
                      <Box
                        height="25px"
                        width="900px"
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
                          gap="small"
                        >
                          <Text size="small">Snap</Text>
                        </Box>
                        <Button
                          direction="row"
                          alignSelf="center"
                          width="10%"
                          justify="center"
                          icon={<FormClose size="medium" />}
                          onClick={() => this.deactivateImage()}
                        />
                      </Box>

                      <Box
                        height="540px"
                        width="900px"
                        align="center"
                        direction="column"
                        gap="small"
                        justify="between"
                        round="medium"
                        elevation="medium"
                        pad={{ vertical: "xsmall", horizontal: "small" }}
                        overflow={{ vertical: "scroll" }}
                      >
                        <Box align="center" direction="column" gap="small">
                          <List data={TestList}>
                            {(datum, index) => (
                              <Box
                                key={index}
                                direction="column"
                                pad="medium"
                                align="center"
                              >
                                <Box height="400px">
                                  <Image src={datum.url} fit="contain" />
                                </Box>
                                <Box width="780">
                                  <Text weight="bold">{datum.caption}</Text>
                                </Box>
                              </Box>
                            )}
                          </List>
                        </Box>
                      </Box>
                    </Layer>
                  )}
                </Box>
              </Box>
            )}
            {matches.desktop && (
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
                      modal={true}
                      responsive={false}
                      margin={{ vertical: "medium", horizontal: "small" }}
                    >
                      <Box
                        height="30px"
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
                        height="80px"
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
                          <Text>
                            Some nice juice supplied by JCRC like monica baey
                            Some nice juice supplied by JCRC like monica baey
                            Some nice juice supplied by JCRC like monica baey
                            Some nice juice supplied by JCRC like monica baey
                            Some nice juice supplied by JCRC like monica baey
                          </Text>
                        </Box>
                      </Box>
                    </Layer>
                  )}
                  <Button
                    icon={<Camera color="brand" />}
                    alignSelf="center"
                    onClick={this.activateImage}
                  />
                  {this.state.showImage && (
                    <Layer
                      onEsc={() => this.deactivateImage()}
                      onClickOutside={() => this.deactivateImage()}
                      position="bottom"
                      modal={true}
                      responsive={false}
                      margin={{ vertical: "medium", horizontal: "small" }}
                    >
                      <Box
                        height="25px"
                        width="1000px"
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
                          <Text size="small">Snap</Text>
                        </Box>
                        <Button
                          direction="row"
                          alignSelf="center"
                          width="10%"
                          justify="center"
                          icon={<FormClose size="medium" />}
                          onClick={() => this.deactivateImage()}
                        />
                      </Box>
                      <Box
                        height="618px"
                        width="1000px"
                        align="center"
                        direction="column"
                        gap="small"
                        justify="between"
                        round="medium"
                        elevation="medium"
                        pad={{ vertical: "xsmall", horizontal: "small" }}
                        overflow={{ vertical: "scroll" }}
                      >
                        <Box align="center" direction="column" gap="small">
                          <List data={TestList}>
                            {(datum, index) => (
                              <Box
                                key={index}
                                direction="column"
                                pad="medium"
                                align="center"
                              >
                                <Box height="450px" margin={{ bottom : "medium"}}>
                                  <Image src={datum.url} fit="contain" />
                                </Box>
                                <Box width="700px">
                                  <Text weight="bold">{datum.caption}</Text>
                                </Box>
                              </Box>
                            )}
                          </List>
                        </Box>
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

  deactivateImage() {
    this.setState({
      showImage: false
    });
  }
}

export default RightActionBar;
