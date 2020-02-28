import React from 'react';
import { Box, Paragraph } from 'grommet';
import { Notification } from 'grommet-icons';

class MiniMap extends React.Component{
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

            // make it appear on top of its background
            elevation = "small"
            
            // aligns itself (center) with the immediate parent's central axis
            alignSelf = "left"

            // dimension with respect to its parent component
            width = "30%"
            height = "40%"

            // border definition
            border={{
                "color": "border",
                "size": "medium",
                "style": "dashed",
                "side": "all"
              }}>
            <Paragraph>Hi I am the minimap component</Paragraph>
        </Box>)
    }
}

export default MiniMap;