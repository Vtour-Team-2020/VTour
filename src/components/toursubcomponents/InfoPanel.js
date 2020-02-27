import React from 'react';
import { Box, Button, Layer } from 'grommet';
import { Bar, Camera, CirclePlay, CircleQuestion } from 'grommet-icons';

class InfoPanel extends React.Component{
    constructor(props) {
        super(props);
        
        this.state = {
            showHelp : false
        };

        this.activateHelp = this.activateHelp.bind(this);
        this.deactivateHelp = this.deactivateHelp.bind(this);        
    }
    
    render(){
        return(
        <Box
            // justify all its content with the main axis
            justify = "center"

            // defines the direction of the central axis
            direction = "row"

            // make it appear on top of its background
            elevation = "small"
            
            // aligns itself (end - right side) with the immediate parent's central axis
            alignSelf = "end"

            // dimension with respect to its parent component
            width = "7%"
            height = "40%"

            // giving the panel some space to breathe
            margin = {{
                top:"8%",
                bottom:"2%",
                right:"2%"
            }}
            // border definition to eccentuate this component
            border={{
                "color": "border",
                "size": "medium",
                "style": "groove",
                "side": "all"
              }}

            // background to make it stand out
            background = {{
                "color": "brand",
                "opacity": "strong"
            }}

            // consistent rounded edges
            round = "medium"
            >

            <Box
                direction="column"
                justify="center"
                overflow = "scroll"
            >
                <Box>
                <Button
                    icon={<CircleQuestion />}
                    alignSelf = "center"
                    onClick={this.activateHelp}
                    />
                {
                    this.state.showHelp &&
                    <Layer
                        onEsc={() => this.deactivateHelp()}
                        onClickOutside={() => this.deactivateHelp()}
                        position = "left"                        
                        >
                            <Box height="small" overflow="auto">
                                <Box pad="xlarge">Corner top-right position</Box>
                            </Box>
                    </Layer>
                }
                </Box>

                <Button
                    icon={<Bar />}
                    alignSelf = "center"
                    onClick={() => {}}
                    />
                <Button
                    icon={<Camera />}
                    onClick={() => {}}
                />
                <Button
                    icon={<CirclePlay />}
                    onClick={() => {}}
                />
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
        this.setState({
            showHelp : false
        });        
    }
}

export default InfoPanel;