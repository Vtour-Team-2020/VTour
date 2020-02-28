import React from 'react';
import { Main, Button, Heading, Box, Paragraph } from 'grommet';
import { Inspect } from 'grommet-icons';

class Sample extends React.Component{
    constructor(props) {
        super(props);

        this.sayHello = this.sayHello.bind(this);
        
        this.state = {
        };
    }

    sayHello(){
        alert('hello');
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
            <Heading
                    alignSelf = "center"
                    color = "pink">
                Welcome to Eusoff Virtual Tour
            </Heading>

            <Box
                pad="medium"
            >
                <Paragraph
                    alignSelf = "center"
                    color = "white"
                    pad = "medium"
                >
                    Welcome to Eusoff Hall virtual tour! And some more description texts here if needed.
                </Paragraph>
            </Box>

            <Button
            onClick={this.sayHello} 
            active="true"
            alignSelf = "center"
            label = "Start Exploring!"
            color = "white"
            />
            </Main>
        </Box>

        return (Component)
    }
}

export default Sample;