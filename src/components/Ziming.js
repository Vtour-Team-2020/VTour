import React from 'react';
import { Box } from 'grommet';
import { Notification } from 'grommet-icons';

class Ziming extends React.Component{
    constructor(props) {
        super(props);
        
        this.state = {
        };
    }
    
    render(){
        return(<Box overflow="visible">
            <h1>Hi I am above div</h1>
        </Box>)
    }
}

export default Ziming;