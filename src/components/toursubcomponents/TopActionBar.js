import React from 'react';
import { Box, Button, Layer, Carousel, Image } from 'grommet';
import { CaretUp, CaretDown, CaretNext, CaretPrevious,
        Home, CircleQuestion} from 'grommet-icons';

class TopActionBar extends React.Component{
    constructor(props) {
        super(props);

       this.props.getActionUpdate()

        this.state = {
            moveUp : false,
            showHelp : false
        };

        this.activateHelp = this.activateHelp.bind(this);
        this.deactivateHelp = this.deactivateHelp.bind(this);
    }
    
    render(){
        console.log(this.state.showHelp)
        console.log(this.props)
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
            width = "35%"
            height = "9%"

            // some gap to breathe
            margin = {{
                "top" : "1%"
            }}

            // background to make it stand out
            background = {{
                "color": "accent-4",
                //"opacity": "strong"
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
                flex = "false"
                gap = "medium"
                justify = "between"overflow={{horizontal:"hidden"}}
            >
                <Button icon={<Home />} ></Button>
                <Button icon={<CaretUp />}  onClick={this.props.getActionUpdate}></Button>
                <Button icon={<CaretDown />}></Button>
                <Button icon={<CaretPrevious />}></Button>
                <Button icon={<CaretNext />}></Button>
                
                <Box>
                    <Button icon={<CircleQuestion /> } onClick={this.activateHelp}></Button>
                    { this.state.showHelp &&
                        <Layer
                        onEsc={() => this.deactivateHelp()}
                        onClickOutside={() => this.deactivateHelp()}
                        position = "center"
                        > 
                        <Box height = "small" overflow = "auto">  
                            <Box pad = "xlarge"> Corner top right position </Box>
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