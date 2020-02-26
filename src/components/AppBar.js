import React, { useState } from 'react';
import { Box, Button, Heading } from 'grommet';
import { Inspect } from 'grommet-icons';

class AppBar extends React.Component{
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
            tag='header'
            direction='row'
            align='center'
            justify='between'
            background='brand'
            pad={{ left: 'medium', right: 'small', vertical: 'small' }}
            elevation='medium'
            style={{ zIndex: '1' }}
        >
            <Heading level='3' margin='none'>
                Virtual Tour 2020
            </Heading>
            <Button icon={<Inspect />}  onClick={() => {}} />
        </Box>)
    }
}

export default AppBar