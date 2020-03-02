// import react for JSX 
import React from 'react';

// import grommet to use their built-in component
import { Box, Stack, Image } from 'grommet';

// import sub components
import BottomActionBar from './toursubcomponents/BottomActionBar'
import TopActionBar from './toursubcomponents/TopActionBar'
import MidSection from  "./toursubcomponents/MidSection"

// import entrance pic
import entrancePic from "./blogic/resource/images/entrance.png"

// import biz loig
import User from "./blogic/User"

class Tour extends React.Component{
    constructor(props) {
        super(props);
        
        this.state = {
            currentUser : new User(),
            newUser : new User(),
            // this state becomes permenantly false if user starts moving
            userActive : false,

            // gif, initialise to empty string
            gif : "",

            // entrance pic
            entrance : "url(" + {entrancePic} + ")",

            // available movements indicated in boolean
            topActionProps : {
                canMoveUp: true,
                canMoveDown: true,
                canMoveLeft: true,
                canMoveRight: true
            }
        };

        // binding all these methods to the child components to access their state update
        this.getUpActionUpdate = this.getUpActionUpdate.bind(this)
        this.getDownActionUpdate = this.getDownActionUpdate.bind(this)
        this.getRightActionUpdate = this.getRightActionUpdate.bind(this)
        this.getLeftActionUpdate = this.getLeftActionUpdate.bind(this)
        this.updateLocationStates = this.updateLocationStates.bind(this)

        //
        this.gifRendering = this.gifRendering.bind(this)
        this.setUserActive = this.setUserActive.bind(this)
    }
    
    render () {
        
        let component = 
        <Box
        direction = "column"
        width = "90%"
        margin = {{
            left : "5%",
            right : "5%",
            top: "5%",
            bottom: "5%",
        }}
        >
        <Stack>
            <Box
                width = "100%"
                // height = "400px"
                justify = "center"
                align = "center"
                >
                    {console.log(this.state.topActionProps)}
                    { !this.state.userActive && 
                    <Box
                        justify="center"
                    >
                        <Image     
                            fit="cover"
                            // fill={true}
                            src= {entrancePic}
                            />
                    </Box>}

                    { this.state.userActive &&
                        this.gifRendering(this.state.gif)
                    }
                {console.log(this.state.gifkey)}
            </Box>
        <Box
            height = "100%"
        >
            {/* Passing down the parent's getActionUpdate as a prop to be called in the
            child component, it then changes the state in the parent component */}
            <TopActionBar getUpActionUpdate={this.getUpActionUpdate} getDownActionUpdate={this.getDownActionUpdate} 
            getLeftActionUpdate={this.getLeftActionUpdate} getRightActionUpdate={this.getRightActionUpdate} />
            <MidSection />
            <BottomActionBar />
        </Box>
        </Stack>
        </Box>
        return(component)
    }

    /**
     * Binding a directional input from user to biz logic -
     *  1. fetch the transition gif (if location is valid) and update gif component
     *  2. update (in biz logic) the new current location
     *  3. fetch the new information (accessible neighbours, juice etc) of the new location
     *  4. update relevant states [this.updateLocationStates]
     */
    getUpActionUpdate() {
        console.log("User moves up")
        if (this.state.currentUser.getTransitionGif("up") !== undefined){
            // potential bug for mutating state directly
            this.setState({gif: this.state.currentUser.getTransitionGif("up")});
        }
        this.state.currentUser.changeLocation("up");

        this.updateLocationStates(
            this.state.currentUser.getLocationInfo()
        );

        this.setUserActive();
    }

    getDownActionUpdate() {
        console.log("User moves down")
        if (this.state.currentUser.getTransitionGif("down") !== undefined){
            this.setState({gif: this.state.currentUser.getTransitionGif("down")});
        }
        this.state.currentUser.changeLocation("down");

        this.updateLocationStates(
            this.state.currentUser.getLocationInfo()
        );
        

        this.setUserActive();
    }

    getRightActionUpdate() {
        console.log("User moves right")
        if (this.state.currentUser.getTransitionGif("right") !== undefined){
            this.setState({gif: this.state.currentUser.getTransitionGif("right")});
        }

        this.state.currentUser.changeLocation("right");

        this.updateLocationStates(
            this.state.currentUser.getLocationInfo()
        );
        this.setUserActive();
    }

    getLeftActionUpdate() {
        console.log("User moves left")
        if (this.state.currentUser.getTransitionGif("left") !== undefined){
            this.setState({gif: this.state.currentUser.getTransitionGif("left")});
        }

        this.state.currentUser.changeLocation("left");

        this.updateLocationStates(
            this.state.currentUser.getLocationInfo()
        );
        this.setUserActive();
    }

    /**
     * Takes in the location info of the current location and use them to set states
     * (accurate)
     * @param {Location info json} locationInfo 
     */
    updateLocationStates(locationInfo) {
        console.log(locationInfo)        
        var newUp, newDown, newLeft, newRight
        if(locationInfo.upNeighbour === null){
            newUp = false
        }else{
            newUp = true
        }
        if(locationInfo.downNeighbour === null){
            newDown = false
        }else{
            newDown = true
        }
        if(locationInfo.leftNeighbour === null){
            newLeft = false
        }else{
            newLeft = true
        }
        if(locationInfo.rightNeighbour === null){
            newRight = false
        }else{
            newRight = true
        } 
        // update state in tour.js
        this.setState(function(){
           return{
               topActionProps : {
                canMoveUp : newUp,
                canMoveDown : newDown,
                canMoveLeft : newLeft,
                canMoveRight : newRight
               }
            //    canMoveUp : newUp,
            //    canMoveDown : newDown,
            //    canMoveRight : newRight,
            //    canMoveLeft : newLeft,
           }
        })
    }

    setUserActive(){
        if (this.userActive){
            return;
        }

        this.setState(function(){
            return {
                userActive : true
            }
        })
    }

    gifRendering(gifkey) {
    
            return(
                <Box
                    direction="row"
                    justify="center"
                >
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
            )
    }
}

export default Tour;