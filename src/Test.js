import React from 'react';
import { Box } from 'grommet';

//import JSON and JS logic 
import Location from './blogic/Location.js'
import locationData from './blogic/locations'



class Test extends React.Component{
    constructor(props) {
        super(props);
        
        this.state = {
            locations : locationData,
            CurrentLocation : new Location()
        };
    }
    
    render(){
        return(<Box>
            {console.log(this.state.locations)}
            {console.log(this.state.CurrentLocation)}
        </Box>)
    }
}

export default Test;