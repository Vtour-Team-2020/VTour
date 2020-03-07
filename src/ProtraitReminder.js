import React from 'react';
import { Box } from 'grommet';
import { Alert } from 'grommet-icons'

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
                    <Alert color="brand"></Alert>
                    <h3 style = {{ fontFamily : "Trebuchet MS"}}>
                    Switch to landscape mode
                    </h3>
                    <h3 style = {{ fontFamily : "Trebuchet MS"}}>
                    for better experience
                    </h3>




                    <Box
                        background="dark-1" 
                        pad="medium"

                    >
                    <h7 style = {{ fontFamily : "Trebuchet MS"}}>
                    <p>
                    <p></p>
                    </p>
                    <Alert color="yellow"></Alert> Not working on Desktop? 
                    </h7>
                    
                    
                    
                    <h7>
                    Try your mobile devices
                    </h7>
                    <h7 style = {{ fontFamily : "Trebuchet MS"}}><p></p>
                    <Alert color="yellow"></Alert>
                    You are advised to use while connected to Wifi
                    </h7>
                    </Box>
            </Box>
        </Box>
        return (Component)
    }
}

export default ProtraitReminder;