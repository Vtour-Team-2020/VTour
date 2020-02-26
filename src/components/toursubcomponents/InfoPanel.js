import React from 'react';
import { Box, Paragraph } from 'grommet';
import { Notification } from 'grommet-icons';

class InfoPanel extends React.Component{
    constructor(props) {
        super(props);
        
        this.state = {
        };
    }
    
    render(){
        return(<Box
            justify = "end"
            margin = {{ "right" : "0"}}
            width = "50%"
            height = "50%"
            border={{
                "color": "border",
                "size": "medium",
                "style": "dashed",
                "side": "all"
              }}>
            <Paragraph>Hi I am the info panel component</Paragraph>
        </Box>)
    }
}

export default InfoPanel;