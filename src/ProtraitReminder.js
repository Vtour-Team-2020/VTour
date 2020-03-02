import React from 'react';
import { Main, Heading, Box } from 'grommet';

class ProtraitReminder extends React.Component{
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
            direction="column"
            justify="center" 
            align="center" 
            margin={{
                left:"5%",
                right:"5%"
            }}
            width = "90%"
        >
            <Heading
                    alignSelf = "center"
                    justify = "center"
                    align = "center"
                    level = "5"
                    color = "white">
                    <span style = {{ fontFamily : "Trebuchet MS"}}>
                    switch to landscape mode for better experience
                    </span>
            </Heading>
        </Box>
        return (Component)
    }
}

export default ProtraitReminder;