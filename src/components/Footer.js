import React, { useState } from 'react';
import { Box, Button, Heading } from 'grommet';
import { Inspect } from 'grommet-icons';

class Footer extends React.Component{
    constructor(props) {
        super(props);
        
        this.state = {
            username : "Bob",
            click : true,
            color: "",    
        };

        // we have to first bind the event handling method to this class
        // this.handleClick = this.handleClick.bind(this)
    }
    
    render(){
        return(<Box
            margin = {{
                top:"5%"
            }}
            tag='header'
            direction='row'
            align='center'
            justify='between'
            background="linear-gradient(102.77deg, #FFFFFF -9.18%, #024ef3 209.09%)"
            
            pad={{ left: 'medium', right: 'small', vertical: 'small' }}
            elevation='medium'
            style={{ zIndex: '1' }}
        >
            <Heading level='5' margin='none'>
                Virtual Tour 2020
            </Heading>
        </Box>)
    }
}

export default Footer