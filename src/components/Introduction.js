import React from "react";
import Delay from "react-delay";
import { Main, Heading, Box } from "grommet";

class Introduction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      delay: true
    };
  }

  render() {
    const Component = (
      <div>
        <Box direction="column" justify="center" align="center" width="100%">
          <Main>
            <Heading level="1" color="white">
              <span style={{ fontFamily: "Trebuchet MS" }}>
                <span style={{ color: "yellow", fontStyle: "italic" }}>
                  EUSOFF
                </span>{" "}
                Online
              </span>
            </Heading>
          </Main>
        </Box>
      </div>
    );
    return Component;
  }

  // componentDidMount(){
  //     setTimeout(function() { //Start the timer
  //         this.setState({render: true}) //After 1 second, set render to true
  //     }.bind(this), 1000)
  // }
}

export default Introduction;
