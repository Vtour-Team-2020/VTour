import React from 'react';
import { Main, Heading, Box } from 'grommet';

class Sample extends React.Component{
    constructor(props) {
        super(props);
        
        this.state = {
        };
    }
    
    render(){

        const Component =         
        <Box 
            justify="center" 
            align="center" 
            pad="medium"
            height="small"   
        >
            <Main>
            <Heading
                    alignSelf = "center"
                    color = "white">
                Welcome to <span style = {{ color : "yellow"}} >Eusoff</span> Virtual Tour
            </Heading>
            </Main>
        </Box>
        return (Component)
    }
}

export default Sample;