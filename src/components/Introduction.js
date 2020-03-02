import React from 'react';
import { Main, Heading, Box } from 'grommet';

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
            pad="medium"
            // height="small"
            width = "100%"
        >
            <Main>
            <Heading
                    alignSelf = "center"
                    level = "1"
                    color = "white">
                    <span style = {{ fontFamily : "Trebuchet MS"}}>
                    <span style = {{ color : "yellow", fontStyle: "italic" }} >EUSOFF</span> Online
                    </span>
            </Heading>
            </Main>
        </Box>
        return (Component)
    }
}

export default Sample;