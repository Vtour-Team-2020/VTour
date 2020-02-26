import React from 'react';
import { Box } from 'grommet';
import InfoPanel from './toursubcomponents/InfoPanel'
import TopActionBar from './toursubcomponents/TopActionBar'
import MiniMap from './toursubcomponents/MiniMap'

class Tour extends React.Component{
    constructor(props) {
        super(props);
        
        this.state = {
        };
    }
    
    render(){
        const component =
        <Box
            border={{ color: 'brand', size: 'large' }}
            width = "100%"
            height = "large"
            background = "dark-3"
            round = "large"
        >    
            <TopActionBar />
            <InfoPanel />
            <MiniMap />
            
        </Box>
        return(component)
    }
}

export default Tour;