import React from 'react';
import { Box } from 'grommet';

class Tour extends React.Component{
    constructor(props) {
        super(props);
        
        this.state = {
        };
    }
    
    render(){
        return(<Box>
            <h1>Hi I am a default component</h1>
        </Box>)
    }
}

export default Tour;