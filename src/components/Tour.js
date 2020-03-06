// import react for JSX
import React, { Fragment } from "react";

// import grommet to use their built-in component
import { Box, Image } from "grommet";

//import Media
import Media from "react-media";

// import sub components
import RightActionBar from "./RightActionBar";
import LeftActionBar from "./LeftActionBar";

// import entrance pic
import entrancePic from "./blogic/resource/images/HO.png";

// import biz loig
import User from "./blogic/User";


class Tour extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: new User(),
      newUser: new User(),
      // this state becomes permenantly false if user starts moving
      userActive: false,

      // gif, initialise to empty string
      mainPic: "",

      // entrance pic
      entrance: entrancePic,

      // available movements indicated in boolean
      canMoveUp: true,
      canMoveDown: true,
      canMoveLeft: true,
      canMoveRight: true,

      onLeftBar: true,
      onRightBar: true,

      jumped: false,

      eventList: undefined,
      hasEvent: false,

      Juice: ""
    };

    // binding all these methods to the child components to access their state update
    this.getUpActionUpdate = this.getUpActionUpdate.bind(this);
    this.getDownActionUpdate = this.getDownActionUpdate.bind(this);
    this.getRightActionUpdate = this.getRightActionUpdate.bind(this);
    this.getLeftActionUpdate = this.getLeftActionUpdate.bind(this);
    this.updateLocationStates = this.updateLocationStates.bind(this);

    //
    this.picRendering = this.picRendering.bind(this);
    this.setUserActive = this.setUserActive.bind(this);

    //
    this.turnOffLeftBar = this.turnOffLeftBar.bind(this);
    this.turnOnLeftBar = this.turnOnLeftBar.bind(this);

    this.turnOnRightBar = this.turnOnRightBar.bind(this);
    this.turnOffRightBar = this.turnOffRightBar.bind(this);

    //
    this.getJumpLocationUpdate = this.getJumpLocationUpdate.bind(this);
  }

  render() {
    let component = (
      <Media
        queries={{
          smallphones: "(max-height: 373px)",
          regularPhones: "(min-height: 374px) and (max-height: 600px)",
          large:
            "(min-width: 731px) and (min-height: 700px)"
        }}
      >
        {matches => (
          <Fragment>
            {// Fragment 1 for small phones
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
                  onLeftBar={this.state.onLeftBar}
                  canMoveUp={this.state.canMoveUp}
                  canMoveDown={this.state.canMoveDown}
                  canMoveLeft={this.state.canMoveLeft}
                  canMoveRight={this.state.canMoveRight}
                />

                <Box
                  width="430px"
                  height="241px"
                  justify="center"
                  align="center"
                >
                  {!this.state.userActive && (
                    <Box justify="center">
                      <Image fit="contain" src={this.state.entrance} />
                    </Box>
                  )}
                  {this.state.userActive &&
                    this.picRendering(this.state.mainPic)}
                </Box>
                <RightActionBar
                  getJumpLocationUpdate={this.getJumpLocationUpdate}
                  eventList={this.state.eventList}
                  hasEvent={this.state.hasEvent}
                  onRightBar={this.state.onRightBar}
                  juice={this.state.juice}
                />
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
                  onLeftBar={this.state.onLeftBar}
                  canMoveUp={this.state.canMoveUp}
                  canMoveDown={this.state.canMoveDown}
                  canMoveLeft={this.state.canMoveLeft}
                  canMoveRight={this.state.canMoveRight}
                />
                <Box
                  width="550px"
                  height="310px"
                  justify="center"
                  align="center"
                >
                  {!this.state.userActive && (
                    <Box justify="center">
                      <Image
                        fit="contain"
                        // fill={true}
                        src={this.state.entrance}
                      />
                    </Box>
                  )}

                  {this.state.userActive &&
                    this.picRendering(this.state.mainPic)}
                </Box>
                {/* Passing down the parent's getActionUpdate as a prop to be called in the
                            child component, it then changes the state in the parent component */}

                <RightActionBar
                  getJumpLocationUpdate={this.getJumpLocationUpdate}
                  eventList={this.state.eventList}
                  hasEvent={this.state.hasEvent}
                  onRightBar={this.state.onRightBar}
                  juice={this.state.juice}
                />
              </Box>
            )}

            {//fragment  for bigger screens
            (matches.large) && (
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
                  onLeftBar={this.state.onLeftBar}
                  canMoveUp={this.state.canMoveUp}
                  canMoveDown={this.state.canMoveDown}
                  canMoveLeft={this.state.canMoveLeft}
                  canMoveRight={this.state.canMoveRight}
                />
                <Box
                  width="806px"
                  height="454px"
                  justify="center"
                  align="center"
                >
                  {!this.state.userActive && (
                    <Box justify="center">
                      <Image
                        // fit="cover"
                        fill={true}
                        src={this.state.entrance}
                      />
                    </Box>
                  )}

                  {this.state.userActive &&
                    this.picRendering(this.state.mainPic)}
                </Box>
                {/* Passing down the parent's getActionUpdate as a prop to be called in the
                            child component, it then changes the state in the parent component */}

                <RightActionBar
                  getJumpLocationUpdate={this.getJumpLocationUpdate}
                  eventList={this.state.eventList}
                  hasEvent={this.state.hasEvent}
                  onRightBar={this.state.onRightBar}
                  juice={this.state.juice}
                />
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
    let mainPic_file_path = "";
    if (this.state.currentUser.getTransitionGif("up") !== undefined) {
      mainPic_file_path = this.state.currentUser.getTransitionGif("up");
    }
    this.state.currentUser.changeLocation("up");

    this.updateLocationStates(this.state.currentUser.getLocationInfo());

    this.setUserActive();

    if (mainPic_file_path) {
      this.setState({ mainPic: mainPic_file_path });
    }
    // turn left bar off momentarily
    this.turnOffLeftBar();
    this.turnOffRightBar();
    //implemented delay under component did update which turns the thing back on after 3.5s
  }

  getDownActionUpdate() {
    let mainPic_file_path = "";
    if (this.state.currentUser.getTransitionGif("down") !== undefined) {
      mainPic_file_path = this.state.currentUser.getTransitionGif("down");
    }
    this.state.currentUser.changeLocation("down");

    this.updateLocationStates(this.state.currentUser.getLocationInfo());

    this.setUserActive();

    if (mainPic_file_path) {
      this.setState({ mainPic: mainPic_file_path });
    }
    // turn left bar off momentarily
    this.turnOffLeftBar();
    this.turnOffRightBar();
    //implemented delay under component did update which turns the thing back on after 3.5s
  }

  getRightActionUpdate() {
    let mainPic_file_path = "";
    if (this.state.currentUser.getTransitionGif("right") !== undefined) {
      mainPic_file_path = this.state.currentUser.getTransitionGif("right");
    }
    this.state.currentUser.changeLocation("right");

    this.updateLocationStates(this.state.currentUser.getLocationInfo());

    this.setUserActive();

    if (mainPic_file_path) {
      this.setState({ mainPic: mainPic_file_path });
    }
    // turn left bar off momentarily
    this.turnOffLeftBar();
    this.turnOffRightBar();
    //implemented delay under component did update which turns the thing back on after 3.5s
  }

  getLeftActionUpdate() {
    let mainPic_file_path = "";
    if (this.state.currentUser.getTransitionGif("left") !== undefined) {
      mainPic_file_path = this.state.currentUser.getTransitionGif("left");
    }
    this.state.currentUser.changeLocation("left");

    this.updateLocationStates(this.state.currentUser.getLocationInfo());

    this.setUserActive();

    if (mainPic_file_path) {
      this.setState({ mainPic: mainPic_file_path });
    }
    // turn left bar off momentarily
    this.turnOffLeftBar();
    this.turnOffRightBar();
    //implemented delay under component did update which turns the thing back on after 3.5s
  }

  /**
   *
   * @param {Location name in string} locationName
   */
  getJumpLocationUpdate(locationName) {
    this.setState({
      jumped: true
    });

    if (this.state.currentUser.hasLocation(locationName)) {
      this.state.currentUser.quickMove(locationName);
    } else {
      console.log("location invalid");
    }

    console.log("user jumped to " + locationName);

    this.updateLocationStates(this.state.currentUser.getLocationInfo());

    this.setUserActive();

    var stoppic = this.state.currentUser.getCurrentLocationPic();

    if (stoppic) {
      this.setState({ mainPic: stoppic, jumped: false });
    }
  }

  /**
   * Takes in the location info of the current location and use them to set states
   * (accurate)
   * @param {Location info json} locationInfo
   */
  updateLocationStates(locationInfo) {
    var newUp, newDown, newLeft, newRight;

    // Direction update
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

    // Juice Update
    this.setState({
      juice : this.state.currentUser.getJuice()
    })
    // Event state update
    if (this.state.currentUser.getCurrentLocationEvents() !== undefined) {
      this.setState({
        eventList: this.state.currentUser.getCurrentLocationEvents(),
        hasEvent: true
      });
    } else {
      this.setState({
        hasEvent: false
      });
    }

    // update state in tour.js
    this.setState(function() {
      return {
        canMoveUp: newUp,
        canMoveDown: newDown,
        canMoveLeft: newLeft,
        canMoveRight: newRight
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

  picRendering(pickey) {
    return (
      <Box direction="row" justify="center">
        <Image
          fit="contain"
          // fill={true}
          src={pickey}
        />
      </Box>
    );
  }

  turnOffLeftBar() {
    this.setState({ onLeftBar: false });
  }

  turnOnLeftBar() {
    this.setState({ onLeftBar: true });
  }

  turnOnRightBar() {
    this.setState({ onRightBar: true });
  }

  turnOffRightBar() {
    this.setState({ onRightBar: false });
  }

  componentDidMount() {
    console.log(this.state.currentUser.getLocationInfo())
    this.updateLocationStates(
      this.state.currentUser.getLocationInfo()
    )
  }
  
  //delay implemented here
  componentDidUpdate() {
    console.log(this.state.currentUser.getLocationInfo())
    if (this.state.onLeftBar === false) {
      setTimeout(
        function() {
          this.setState(function() {
            var stoppic = this.state.currentUser.getCurrentLocationPic();
            if (stoppic !== null) {
              console.log("setting stop pic now")
              return {
                onLeftBar: true,
                onRightBar: true,
              };
            }
            return {
              onRightBar: true,
              onLeftBar: true
            };
          });
        }.bind(this),
        2000
      );
    }
  }
}

export default Tour;
