import React from 'react';
import { Main, Heading, Box, Paragraph } from 'grommet';

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
            background="linear-gradient(102.77deg, #865ED6 -9.18%, #18BAB9 209.09%)"
            pad="large"
            height="medium"
            
        >
            <Main>
            <Heading>
                Welcome to Eusoff Virtual Tour
            </Heading>
            <Paragraph>
                Some meaningful text
            </Paragraph>
            </Main>
        </Box>

        return (Component)
    }
}

export default Sample;