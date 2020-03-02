// import react for JSX
import React, { Fragment } from "react";

// import grommet to use their built-in component
import { Box, Stack, Image } from "grommet";

//import Media
import Media from "react-media";

// import sub components
import RightActionBar from "./toursubcomponents/RightActionBar";
import LeftActionBar from "./toursubcomponents/LeftActionBar";

// import entrance pic
import entrancePic from "./blogic/resource/images/entrance.png";

// import biz loig
import User from "./blogic/User";

//testssss
import test from "./blogic/resource/gif/test.gif";

class Tour extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: new User(),
      newUser: new User(),
      // this state becomes permenantly false if user starts moving
      userActive: false,

      // gif, initialise to empty string
      gif: "",

      // entrance pic
      entrance: "url(" + { entrancePic } + ")",

      // available movements indicated in boolean
      topActionProps: {
        canMoveUp: true,
        canMoveDown: true,
        canMoveLeft: true,
        canMoveRight: true
      }
    };

    // binding all these methods to the child components to access their state update
    this.getUpActionUpdate = this.getUpActionUpdate.bind(this);
    this.getDownActionUpdate = this.getDownActionUpdate.bind(this);
    this.getRightActionUpdate = this.getRightActionUpdate.bind(this);
    this.getLeftActionUpdate = this.getLeftActionUpdate.bind(this);
    this.updateLocationStates = this.updateLocationStates.bind(this);

    //
    this.gifRendering = this.gifRendering.bind(this);
    this.setUserActive = this.setUserActive.bind(this);
  }

  render() {
    let component = (
      <Media
        queries={{
            smallphones: "(max-width: 731px) and (max-height: 373px)",
            regularPhones: "(min-width: 731px) and (min-height: 374px) and (max-height: 600px)",
            large: "(min-width: 731px) and (min-height: 700px)"
        }}
      >
        {matches => (
          <Fragment>
            {// Fragment 2 for most phones out there
            matches.smallphones && (
              // the entire view box
              <Box
                direction="row"
                justify="center"
                align="center"
                width="100%"
                margin={{
                  left: "0px",
                  right: "0px",
                  top: "5%",
                  bottom: "5%"
                }}
              >
                <LeftActionBar
                  getUpActionUpdate={this.getUpActionUpdate}
                  getDownActionUpdate={this.getDownActionUpdate}
                  getLeftActionUpdate={this.getLeftActionUpdate}
                  getRightActionUpdate={this.getRightActionUpdate}
                />
                
                <Box
                  width="430px"
                  height="241px"
                  justify="center"
                  align="center"
                >
                  {console.log(this.state.topActionProps)}
                  {!this.state.userActive && (
                    <Box justify="center">
                      <Image
                        fit="contain"
                        // fill={true}
                        src={test}
                      />
                    </Box>
                  )}

                  {this.state.userActive && this.gifRendering(this.state.gif)}
                  {console.log(this.state.gifkey)}
                </Box>
                <RightActionBar />
              </Box>
            )}

            {// Fragment 2 for most phones out there
            matches.regularPhones && (
              // the entire view box
              <Box
                direction="row"
                justify="center"
                align="center"
                width="100%"
                margin={{
                  left: "0px",
                  right: "0px",
                  top: "5%",
                  bottom: "5%"
                }}
              >
                <LeftActionBar
                  getUpActionUpdate={this.getUpActionUpdate}
                  getDownActionUpdate={this.getDownActionUpdate}
                  getLeftActionUpdate={this.getLeftActionUpdate}
                  getRightActionUpdate={this.getRightActionUpdate}
                />
                <Box
                  width="625px"
                  height="350px"
                  justify="center"
                  align="center"
                >
                  {console.log(this.state.topActionProps)}
                  {!this.state.userActive && (
                    <Box justify="center">
                      <Image
                        fit="contain"
                        // fill={true}
                        src={test}
                      />
                    </Box>
                  )}

                  {this.state.userActive && this.gifRendering(this.state.gif)}
                  {console.log(this.state.gifkey)}
                </Box>
                {/* Passing down the parent's getActionUpdate as a prop to be called in the
                            child component, it then changes the state in the parent component */}

                <RightActionBar />
              </Box>
            )}

            {//fragment 2 for bigger screens
            matches.large && (
              // the entire view box
              <Box
                direction="row"
                justify="center"
                align="center"
                width="100%"
                margin={{
                  left: "0px",
                  right: "0px",
                  top: "5%",
                  bottom: "5%"
                }}
              >
                <LeftActionBar
                  getUpActionUpdate={this.getUpActionUpdate}
                  getDownActionUpdate={this.getDownActionUpdate}
                  getLeftActionUpdate={this.getLeftActionUpdate}
                  getRightActionUpdate={this.getRightActionUpdate}
                />
                <Box
                  width="1100px"
                  height="618px"
                  justify="center"
                  align="center"
                >
                  {console.log(this.state.topActionProps)}
                  {!this.state.userActive && (
                    <Box justify="center">
                      <Image
                        fit="fill"
                        // fill={true}
                        src={test}
                      />
                    </Box>
                  )}

                  {this.state.userActive && this.gifRendering(this.state.gif)}
                  {console.log(this.state.gifkey)}
                </Box>
                {/* Passing down the parent's getActionUpdate as a prop to be called in the
                            child component, it then changes the state in the parent component */}

                <RightActionBar />
              </Box>
            )}
          </Fragment>
        )}
      </Media>
    );

    return component;
  }

  /**
   * Binding a directional input from user to biz logic -
   *  1. fetch the transition gif (if location is valid) and update gif component
   *  2. update (in biz logic) the new current location
   *  3. fetch the new information (accessible neighbours, juice etc) of the new location
   *  4. update relevant states [this.updateLocationStates]
   */
  getUpActionUpdate() {
    console.log("User moves up");
    let gif_file_path = "";
    if (this.state.currentUser.getTransitionGif("up") !== undefined) {
      gif_file_path = this.state.currentUser.getTransitionGif("up");
    }
    this.state.currentUser.changeLocation("up");

    this.updateLocationStates(this.state.currentUser.getLocationInfo());

    this.setUserActive();

    if (gif_file_path) {
      this.setState({ gif: gif_file_path });
    }
  }

  getDownActionUpdate() {
    console.log("User moves down");
    let gif_file_path = "";
    if (this.state.currentUser.getTransitionGif("down") !== undefined) {
      gif_file_path = this.state.currentUser.getTransitionGif("down");
    }
    this.state.currentUser.changeLocation("down");

    this.updateLocationStates(this.state.currentUser.getLocationInfo());

    this.setUserActive();
    if (gif_file_path) {
      this.setState({ gif: gif_file_path });
    }
  }

  getRightActionUpdate() {
    console.log("User moves right");
    let gif_file_path = "";
    if (this.state.currentUser.getTransitionGif("right") !== undefined) {
      gif_file_path = this.state.currentUser.getTransitionGif("right");
    }

    this.state.currentUser.changeLocation("right");

    this.updateLocationStates(this.state.currentUser.getLocationInfo());
    this.setUserActive();

    if (gif_file_path) {
      this.setState({ gif: gif_file_path });
    }
  }

  getLeftActionUpdate() {
    console.log("User moves left");
    let gif_file_path = "";
    if (this.state.currentUser.getTransitionGif("left") !== undefined) {
      gif_file_path = this.state.currentUser.getTransitionGif("left");
    }

    this.state.currentUser.changeLocation("left");

    this.updateLocationStates(this.state.currentUser.getLocationInfo());
    this.setUserActive();

    if (gif_file_path) {
      this.setState({ gif: gif_file_path });
    }
  }

  /**
   * Takes in the location info of the current location and use them to set states
   * (accurate)
   * @param {Location info json} locationInfo
   */
  updateLocationStates(locationInfo) {
    console.log(locationInfo);
    var newUp, newDown, newLeft, newRight;
    if (locationInfo.upNeighbour === null) {
      newUp = false;
    } else {
      newUp = true;
    }
    if (locationInfo.downNeighbour === null) {
      newDown = false;
    } else {
      newDown = true;
    }
    if (locationInfo.leftNeighbour === null) {
      newLeft = false;
    } else {
      newLeft = true;
    }
    if (locationInfo.rightNeighbour === null) {
      newRight = false;
    } else {
      newRight = true;
    }
    // update state in tour.js
    this.setState(function() {
      return {
        topActionProps: {
          canMoveUp: newUp,
          canMoveDown: newDown,
          canMoveLeft: newLeft,
          canMoveRight: newRight
        }
        //    canMoveUp : newUp,
        //    canMoveDown : newDown,
        //    canMoveRight : newRight,
        //    canMoveLeft : newLeft,
      };
    });
  }

  setUserActive() {
    if (this.userActive) {
      return;
    }

    this.setState(function() {
      return {
        userActive: true
      };
    });
  }

  gifRendering(gifkey) {
    return (
      <Box direction="row" justify="center">
        {/* <GifPlayer
                        gif={gifkey} // load gif  
                        autoplay={true} // enable auto play
                    /> */}
        <Image
          fit="contain"
          // fill={true}
          src={gifkey}
        />
      </Box>
    );
  }
}

export default Tour;
