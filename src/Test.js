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
            {console.log(this.state.CurrentUser.getJuice())}
            {this.state.CurrentUser.changeLocation("up")}
            {console.log(this.state.CurrentUser.getJuice())}
        </Box>)
    }
}

export default Test;