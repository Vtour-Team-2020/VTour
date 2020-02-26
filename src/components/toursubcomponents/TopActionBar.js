import React from 'react';
import { Box, Paragraph } from 'grommet';
import { Notification } from 'grommet-icons';

class TopActionBar extends React.Component{
    constructor(props) {
        super(props);
        
        this.state = {
        };
    }
    
    render(){
        return(<Box
            justify = "center"
            margin = {{ "right" : "0"}}
            width = "50%"
            height = "10%"
            border={{
                "color": "border",
                "size": "medium",
                "style": "dashed",
                "side": "all"
              }}
        >
            <Paragraph>Hi I am top action bar component</Paragraph>
        </Box>)
    }
}

export default TopActionBar;