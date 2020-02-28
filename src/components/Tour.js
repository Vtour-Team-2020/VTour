// import react for JSX 
import React from 'react';

// import grommet to use their built-in component
import { Box, Stack, Image } from 'grommet';

// import sub components
import InfoPanel from './toursubcomponents/InfoPanel'
import TopActionBar from './toursubcomponents/TopActionBar'

// import gif player
import GifPlayer from "react-gif-player"

// import biz loig
import User from '../blogic/User'


class Tour extends React.Component{
    constructor(props) {
        super(props);
        
        this.state = {
            currentUser : new User(),

            // this state becomes permenantly false if user starts moving
            userActive : false,

            // gif, initialise to empty string
            gif : "",

            // entrance pic
            entrance : ""
        };

        // binding all these methods to the child components to access their state update
        this.getUpActionUpdate = this.getUpActionUpdate.bind(this)
        this.getDownActionUpdate = this.getDownActionUpdate.bind(this)
        this.getRightActionUpdate = this.getRightActionUpdate.bind(this)
        this.getLeftActionUpdate = this.getLeftActionUpdate.bind(this)

        this.gifRendering = this.gifRendering.bind(this)

        this.setUserActive = this.setUserActive.bind(this)
    }
    
    render () {

        this.state.entrance = this.state.currentUser.getEntranceImage()
        
        let component = 
        <Box
        width = "90%"
        height = "600px"
        alignSelf = "center"
        margin = {{
            left : "5%",
            right : "5%"
        }}
        border={{ color: 'brand', size: 'small' }}
        >
        <Stack>
            <Box
                width = "100%"
                height = "600px"
                round = "large"
                alignContent = "center"
                >
                    { !this.state.userActive && <Image     
                        fit="contain"
                        fill={true}
                        src={this.state.entrance}
                        />}

                    { this.state.userActive &&
                        this.gifRendering(this.state.gif)
                    }
                {console.log(this.state.gifkey)}
            </Box>
        <Box>
            {/* Passing down the parent's getActionUpdate as a prop to be called in the
            child component, it then changes the state in the parent component */}
            <TopActionBar getUpActionUpdate={this.getUpActionUpdate} getDownActionUpdate={this.getDownActionUpdate} 
            getLeftActionUpdate={this.getLeftActionUpdate} getRightActionUpdate={this.getRightActionUpdate}></TopActionBar>
            <InfoPanel />
        </Box>
        </Stack>
        </Box>
        return(component)
    }

    getUpActionUpdate() {
        console.log("User moves up")
        this.state.gif = this.state.currentUser.getTransitionGif("up");
        this.state.currentUser.changeLocation("up");
        this.setUserActive();
    }

    getDownActionUpdate() {
        console.log("User moves down")
        this.state.gif = this.state.currentUser.getTransitionGif("down");
        this.state.currentUser.changeLocation("down");
        this.setUserActive();
    }

    getRightActionUpdate() {
        console.log("User moves right")
        this.state.gif = this.state.currentUser.getTransitionGif("right");
        this.state.currentUser.changeLocation("right");
        this.setUserActive();
    }

    getLeftActionUpdate() {
        console.log("User moves up")
        this.state.gif = this.state.currentUser.getTransitionGif("left");
        this.state.currentUser.changeLocation("left");
        this.setUserActive();
    }

    setUserActive(){
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
                    <GifPlayer
                        gif={gifkey} // load gif  
                        autoplay={true} // enable auto play
                    />
                    {/* <Image     
                        fit="contain"
                        fill={true}
                        src={gifkey}
                        /> */}
                </Box>
            )
    }
}

export default Tour;