// import react for JSX
import React, { Fragment } from "react";

// import grommet to use their built-in component
import { Box, Image } from "grommet";

// import entrance pic
import entrancePic from "./blogic/resource/images/HO.png";

//
import Media from "react-media";

class Gif extends React.Component {
  constructor(props) {
    super(props);
  }

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
            {// Fragment 1 for small phones
            matches.smallphones && (
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
                  width="430px"
                  height="241px"
                  justify="center"
                  align="center"
                >
                  {!this.props.userActive && (
                    <Box justify="center">
                      <Image fit="contain" src={this.props.entrance} />
                    </Box>
                  )}
                  {this.props.userActive && (
                    <Box justify="center">
                      <Image fit="contain" src={this.props.entrance} />
                    </Box>
                  )}
                </Box>
              </Box>
            )}

            {// Fragment 2 for most phones out there
            matches.regularPhones && (
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
                      <Image
                        fit="contain"
                        src={this.props.entrance}
                      />
                    </Box>
                  )}

                  {this.props.userActive &&
                    <Box justify="center">
                    <Image
                      fit="contain"
                      src={this.props.entrance}
                    />
                  </Box>
                    }
                </Box>
              </Box>
            )}

            {//fragment  for bigger screens
            matches.large && (
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
                  width="806px"
                  height="454px"
                  justify="center"
                  align="center"
                >
                  {!this.props.userActive && (
                    <Box justify="center">
                      <Image
                        fill={true}
                        src={this.props.entrance}
                      />
                    </Box>
                  )}

                  {this.props.userActive &&
                    <Box justify="center">
                    <Image
                      fit="contain"
                      src={this.props.entrance}
                    />
                  </Box>}
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
        <Image
          fit="contain"
          src={pickey}
        />
      </Box>
    );
  }
}

export default Gif;
