// import react for JSX
import React, { Fragment } from "react";

// import grommet to use their built-in component
import { Box, Image } from "grommet";

//import Media
import Media from "react-media";

// import sub components
import RightActionBar from "./RightActionBar";
import LeftActionBar from "./LeftActionBar";
import Gif from "./Gif.js";

// import entrance pic
import entrancePic from "./blogic/resource/locationl/HOL.png";

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
      moving: false,
      Juice: "",
      movingPic: "",
      stopPics: "",
      stopPicl: "",

      staticMount: false,
      delay:7000
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

    this.staticDidMount = this.staticDidMount.bind(this);
  }

  render() {
    let component = (
      <Media
        queries={{
          smallphones: "(max-height: 373px)",
          regularPhones: "(min-height: 374px) and (max-height: 600px)",
          large: "(min-width: 731px) and (min-height: 700px)"
        }}
      >
        {matches => (
          <Fragment>
            {// Fragment 1 for most phones out there
            ( matches.smallphones || matches.regularPhones || matches.large ) && (
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
                      <Gif
                        static={this.state.entrance}
                        userActive={this.state.userActive}
                      />
                    </Box>
                  )}
                  {this.state.userActive &&
                      <Gif
                      moving={this.state.moving}
                      movingPic={this.state.movingPic}
                      stopPic={this.state.stopPics}
                      userActive={this.state.userActive}
                    />}
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
    var movingPicKey = this.state.currentUser.getTransitionGif("up")    
    this.setState({ moving: true });
    this.state.currentUser.changeLocation("up");
    this.updateLocationStates(this.state.currentUser.getLocationInfo());
    this.setState({  movingPic: movingPicKey });
    this.setUserActive();
    this.turnOffLeftBar();
    this.turnOffRightBar();
  }

  getDownActionUpdate() {
    this.setState({ moving: true });
    if (this.state.currentUser.getTransitionGif("down") !== undefined) {
      this.setState({
        movingPic: this.state.currentUser.getTransitionGif("down")
      });
    }
    this.state.currentUser.changeLocation("down");

    this.updateLocationStates(this.state.currentUser.getLocationInfo());

    this.setUserActive();
    this.turnOffLeftBar();
    this.turnOffRightBar();
  }

  getRightActionUpdate() {
    this.setState({ mainPic: "" });
    this.setState({ moving: true });
    if (this.state.currentUser.getTransitionGif("right") !== undefined) {
      this.setState({
        movingPic: this.state.currentUser.getTransitionGif("right")
      });
    }
    this.state.currentUser.changeLocation("right");

    this.updateLocationStates(this.state.currentUser.getLocationInfo());

    this.setUserActive();
    this.turnOffLeftBar();
    this.turnOffRightBar();
  }

  getLeftActionUpdate() {
    //
    this.setState({
      staticMount: false
    });

    this.setState({ moving: true });
    if (this.state.currentUser.getTransitionGif("left") !== undefined) {
      this.setState({
        movingPic: this.state.currentUser.getTransitionGif("left")
      });
    }
    this.state.currentUser.changeLocation("left");

    this.updateLocationStates(this.state.currentUser.getLocationInfo());

    this.setUserActive();
    this.turnOffLeftBar();
    this.turnOffRightBar();
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

    var stoppics = this.state.currentUser.getCurrentLocationPics();
    var stoppicl = this.state.currentUser.getCurrentLocationPicl();

      this.setState({ 
        stopPics: stoppics, 
        stopPicl: stoppicl, 
        jumped: false });
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
      juice: this.state.currentUser.getJuice()
    });
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
    console.log(this.state.currentUser.getLocationInfo());
    this.updateLocationStates(this.state.currentUser.getLocationInfo());
  }

  staticDidMount() {
    this.setState({
      staticMount: true
    });
  }

  //delay implemented here
  componentDidUpdate() {
    console.log(this.state.currentUser.getLocationInfo());
    if (this.state.onLeftBar === false) {
      setTimeout(
        function() {
          this.setState(function() {
            var stoppics = this.state.currentUser.getCurrentLocationPics();
            var stoppicl = this.state.currentUser.getCurrentLocationPicl();
            if (stoppics !== null) {
              console.log("setting stop pic now and remove movingpic");
              return {
                onLeftBar: true,
                onRightBar: true,
                moving: false,
                movingPic: undefined,
                stopPics: stoppics,
                stopPicl: stoppicl
              };
            }
            return {
              onRightBar: true,
              onLeftBar: true
            };
          });
        }.bind(this),
        this.state.delay
      );
    }
  }
}

export default Tour;
