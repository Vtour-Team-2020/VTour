import React from 'react';
import { Box, Paragraph } from 'grommet';
import { Notification } from 'grommet-icons';
import logo from './kums.jpg';

class MiniMap extends React.Component{
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
            height = "40%"
            border={{
                "color": "border",
                "size": "medium",
                "style": "dashed",
                "side": "all"
              }}>
            <img src={logo} alt="Logo" />;     
            <Paragraph>Hi I am the minimap component</Paragraph>
            
        </Box>)
    }
}

export default MiniMap;