// import react for JSX 
import React from 'react';

// import grommet to use their built-in component
import { Box, Stack, Image } from 'grommet';

// import Gifplyaer 
import GifPlayer from 'react-gif-player'

// import react delay
import Delay from 'react-delay'

// import sub components
import InfoPanel from './toursubcomponents/InfoPanel'
import TopActionBar from './toursubcomponents/TopActionBar'

// import image resources
import pic1 from './a.png'
import pic2 from './b.jpg'

// import gif 
import gif from './AtoB.gif'

class Tour extends React.Component{
    constructor(props) {
        super(props);
        
        this.state = {
            moveUp : false,
            moveDown : false,
            moveLeft : false,
            moveRight : false,
            renderGif : true
        };

        // binding all these methods to the child components to access their state update
        this.getUpActionUpdate = this.getUpActionUpdate.bind(this)
        this.getDownActionUpdate = this.getDownActionUpdate.bind(this)
        this.getRightActionUpdate = this.getRightActionUpdate.bind(this)
        this.getLeftActionUpdate = this.getLeftActionUpdate.bind(this)

        this.gifRendering = this.gifRendering.bind(this)
    }
    
    render(){
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
                    <Image     
                        fit="contain"
                        fill={true}
                        src={pic1}
                        />

            {/* {this.gifRendering()} */}
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
        this.setState( function () {
            return{
                moveUp : true
            }
        })
    }

    getDownActionUpdate() {
        console.log("User moves down")
        this.setState( function () {
            return{
                moveDown : true
            }
        })
    }

    getRightActionUpdate() {
        console.log("User moves right")
        this.setState( function () {
            return{
                moveRight : true
            }
        })
    }

    getLeftActionUpdate() {
        console.log("User moves up")
        this.setState( function () {
            return{
                moveLeft : true
            }
        })
    }

    gifRendering() {
        
        let displayPic = pic1;

        if(this.state.moveUp){
            displayPic = pic1;
        }else{
            displayPic = pic2;
        }

        if(this.state.renderGif){
            return(
                <Box
                    direction="row"
                    justify="center"
                >
                    {/* <GifPlayer
                        gif={gif} // load gif  
                        autoplay={true} // enable auto play
                    /> */}
                    <Image     
                        fit="contain"
                        // fill={true}
                        src={displayPic}
                        />
                </Box>
            )
        }
        else{
            return(
                <Image     
                fit="contain"
                // fill={true}
                src={displayPic}
                />
            )
        }
    }
}

export default Tour;