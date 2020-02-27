import React from 'react';
import { Box ,Button, Layer, Text} from 'grommet';
import { Close } from 'grommet-icons';
import { Notification } from 'grommet-icons';

class Yui extends React.Component{
    constructor(props) {
        super(props);
        
        this.state = {
        };
    }
    
    render(){
        return(<Box
            background = "white"
            
        >
            <Box
            direction="coulum"
            border={{ color: 'brand', size: 'large' }}
            pad="medium"
            >
            <Box pad="small" background="dark-3" />
            <Box pad="medium" background="light-3" />
            </Box>
        </Box>)
    }
}

export default Yui;