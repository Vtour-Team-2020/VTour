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
            justify="left" 
            align="center" 
            margin={{
                top: "30%"
            }}
            width = "100%"
        >
            <Box
                align="center"
            >
                    <h3 style = {{ fontFamily : "Trebuchet MS"}}>
                    Switch to landscape mode
                    </h3>
                    <h3 style = {{ fontFamily : "Trebuchet MS"}}>
                    for better experience
                    </h3>
            </Box>
        </Box>
        return (Component)
    }
}

export default ProtraitReminder;