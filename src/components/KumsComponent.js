import React from 'react';
import { Main, Heading, Box } from 'grommet';
import { Button, Layer} from 'grommet'

class KumsComponent extends React.Component{
    constructor(props) {
        super(props);
        
        this.state = {
        };
    }
    
    render(){  
        return <Box>
            <Box
                
                border={{ color: 'black', size: 'small' }}
                pad="small"
            >
                <Box pad="small" background="dark-3" />
                <Box pad="medium" background="light-3" />
            </Box>
        </Box>
        
    }
}

export default KumsComponent;
