// import react for JSX
import React, { Fragment } from "react";

// import grommet to use their built-in component
import { Box, Image, Stack } from "grommet";

//
import Media from "react-media";

import BarLoader from "react-spinners/BarLoader"

class Gif extends React.Component {

  render() {
    let component = (
      <Media
        queries={{
          smallphones: "(max-height: 373px)",
          regularPhones: "(min-height: 374px) and (max-height: 600px)",
          large: "(min-width: 731px) and (min-height: 700px)"
        }}
      >
        {matches => (
          <Fragment>
            {// Fragment 2 for most phones out there
            (matches.regularPhones || matches.smallphones || matches.large ) && (
              // the entire view box
              <Box
                direction="row"
                justify="center"
                align="center"
                width="100%"
                margin={{
                  left: "0px",
                  right: "0px",
                  top: "5%",
                  bottom: "5%"
                }}
              >
                <Box
                  width="550px"
                  height="310px"
                  justify="center"
                  align="center"
                >
                
                  {!this.props.userActive && (
                    <Box justify="center">
                      <Image fit="cover" src={this.props.static} />
                    </Box>
                  )}

                  {this.props.userActive && (
                    <Box justify="center">
                      <Stack anchor="center" alignSelf="center">
                        {" "}
                        <BarLoader height={20} width={150} color="yellow"/>
                        <Box
                          width="550px"
                          height="310px"
                          justify="center"
                          align="center"
                        >   
                          <Image fit="cover" src={this.props.movingPic} />
                        </Box>
                        {!this.props.moving && (
                          <Box
                            width="550px"
                            height="310px"
                            justify="center"
                            align="center"
                          >
                            <Image fit="cover" src={this.props.stopPic} />
                          </Box>
                        )}
                      </Stack>
                    </Box>
                  )}
                </Box>
              </Box>
            )}
          </Fragment>
        )}
      </Media>
    );

    return component;
  }

  picRendering(pickey) {
    return (
      <Box direction="row" justify="center">
        <Image fit="contain" src={pickey} />
      </Box>
    );
  }

  componentDidUpdate() {
    console.log("gif updated");
  }
}

export default Gif;
