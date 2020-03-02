import React from 'react';
import { Box } from 'grommet';

//import JSON and JS logic 
import User from './blogic/User'

class Test extends React.Component{
    constructor(props) {
        super(props);
        
        this.state = {
            // initialise User 
            CurrentUser : new User()
        };
    }
    
    render(){
        return(<Box>
        </Box>)
    }
}

export default Test;