import React from "react";
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
                Virtual Tour
              </span>
            </Heading>
          </Main>
        </Box>
      </div>
    );
    return Component;
  }
}

export default Introduction;
