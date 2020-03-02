import React from 'react';
import { Box } from 'grommet';

class MidSection extends React.Component{
    constructor(props) {
        super(props);
        
        this.state = {
        };
    }
    
    render(){
        return(<Box
            // justify all its content with the main axis
            justify = "center"

            // defines the direction of the central axis
            direction = "row"

            // dimension with respect to its parent component
            width = "100%%"
            height = "80%">
        </Box>)
    }
}

export default MidSection;