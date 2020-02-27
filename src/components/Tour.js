import React from 'react';
import { Box, Stack, Image } from 'grommet';
import InfoPanel from './toursubcomponents/InfoPanel'
import TopActionBar from './toursubcomponents/TopActionBar'
// import MiniMap from './toursubcomponents/MiniMap'

import pic1 from './a.png'
import pic2 from './b.jpg'

class Tour extends React.Component{
    constructor(props) {
        super(props);
        
        this.state = {
            moveUp : true
        };

        this.getActionUpdate = this.getActionUpdate.bind(this)
    }
    
    render(){

        let displayPic = pic1;
        
        //attempt to change picture dynamically using state
        if (this.state.moveUp){
            displayPic = pic1;
        } else {
            displayPic = pic2;
        }

        const component = 
        <Box
        width = "96%"
        alignSelf = "center"
        margin = {{
            left : "2%",
            right : "2%"
        }}
        border={{ color: 'brand', size: 'small' }}
        >
        <Stack>
            <Box
                width = "100%"
                height = "600px"
                round = "large"
                >
                <Image     
                fit="cover"
                fill={true}
                src={displayPic}
                />
            </Box>
        <Box
            wrap = {false}
            width = "100%"
            height = "670px"
            >
            {/* Passing down the parent's getActionUpdate as a prop to be called in the
            child component, it then changes the state in the parent component */}
            <TopActionBar getActionUpdate={this.getActionUpdate}/>
            <InfoPanel />
        </Box>
        </Stack>
        </Box>
        return(component)
    }

    getActionUpdate() {
        this.setState( function(){
            return {
                moveUp : !this.state.moveUp
            }
        })
    }
}

export default Tour;