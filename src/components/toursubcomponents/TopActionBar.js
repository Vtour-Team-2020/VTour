import React from 'react';
import { Box, Button, Layer } from 'grommet';
import { CaretUp, CaretDown, CaretNext, CaretPrevious,
        Home, CircleQuestion} from 'grommet-icons';

class TopActionBar extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            moveUp : false,
            moveDown : false,
            moveLeft : false,
            moveRight : false,
            showHelp : false
        };

        this.activateHelp = this.activateHelp.bind(this);
        this.deactivateHelp = this.deactivateHelp.bind(this);
    }
    
    render(){
        return(<Box
            // justify all its content with the main axis
            justify = "center"

            // defines the direction of the central axis
            direction = "row"

            // make it appear on top of its background
            elevation = "small"
            
            // aligns itself (center) with the immediate parent's central axis
            alignSelf = "center"

            // dimension with respect to its parent component
            width = "45%"
            height = "9%"

            // some gap to breathe
            margin = {{
                "top" : "1%"
            }}

            // background to make it stand out
            background = {{
                "color": "brand",
                "opacity": "strong"
            }}
                        
            // border design
            border = {{
                "color": "border",
                "size": "medium",
                "style": "groove",
                "side": "all"
            }}

            // set the edges to round
            round = "medium"
            >
            <Box
                align = "center"
                as = "header"
                direction = "row"
                gap = "medium"
                justify = "between"
                overflow={{ horizontal: 'scroll' }}
            >
                <Box
                    width="20%"
                    height="100%"
                >
                    <Button icon={<CaretUp />}  onClick={this.props.getUpActionUpdate}></Button>
                </Box>
                <Box
                    width="20%"
                    height="100%"
                >
                    <Button icon={<CaretDown />} onClick={this.props.getDownActionUpdate}></Button>
                </Box>
                <Box
                    width="20%"
                    height="100%"
                >
                    <Button icon={<CaretPrevious /> } onClick={this.props.getLeftActionUpdate}></Button>
                </Box>
                <Box
                    width="20%"
                    height="100%"
                >
                    <Button icon={<CaretNext /> } onClick={this.props.getRightActionUpdate}></Button>
                </Box>
                <Box
                    width="20%"
                    height="100%"
                >
                    <Button icon={<CircleQuestion /> } onClick={this.activateHelp}></Button>
                    { this.state.showHelp &&
                        <Layer
                        onEsc={() => this.deactivateHelp()}
                        onClickOutside={() => this.deactivateHelp()}
                        position = "right"
                        >   
                            <Box height="small" overflow="auto">
                                <Box pad="xlarge">Corner top-right position</Box>
                            </Box>
                        </Layer>
                    }
                </Box>
              </Box>            
        </Box>)
    }

    activateHelp(){
        this.setState( function() {
            return {
              showHelp : true
            };
        });
    }

    deactivateHelp(){
        this.setState( function() {
            return {
                showHelp : false
            };
        });        
    }
}

export default TopActionBar;