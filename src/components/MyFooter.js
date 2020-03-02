import React from 'react';
import { Footer, Text, Anchor } from 'grommet';

class MyFooter extends React.Component{
    constructor(props) {
        super(props);
        
        this.state = {
            username : "Bob",
            click : true,
            color: "",    
        };

        // we have to first bind the event handling method to this class
        // this.handleClick = this.handleClick.bind(this)
    }
    
    render(){
        return(
            <Footer 
                background="linear-gradient(102.77deg, #623AA1 -9.18%, #015351 209.09%)"
                pad="small"
            >
            <Text color="white">Copyright</Text>
            <Anchor color="white" label="About Hackers" />
          </Footer>)
    }
}

export default MyFooter