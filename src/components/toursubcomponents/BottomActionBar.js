import React from 'react';
import { Box, Button, Layer } from 'grommet';
import { Bar, Camera, CirclePlay, CircleQuestion } from 'grommet-icons';

class BottomActionBar extends React.Component{
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
            
            // aligns itself (end - right side) with the immediate parent's central axis
            alignSelf = "center"

            // dimension with respect to its parent component
            width = "100%"
            height = "9%"

            // giving the panel some space to breathe
            margin = {{
                bottom:"1%"
            }}
            >

            <Box
                direction="row"
                justify="center"
                overflow = "hidden"
            >
                <Box
                width="25%">
                <Button
                    icon={<CircleQuestion color="brand"/>}
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

                <Box
                    width="25%"
                >
                <Button
                    icon={<Bar color="brand"/>}
                    alignSelf = "center"
                    onClick={() => {}}
                    />
                </Box>

                <Box
                    width="25%"
                >
                <Button
                    icon={<Camera color="brand"/>}
                    onClick={() => {}}
                />
                </Box>

                <Box
                    width="25%"
                >
                <Button
                    icon={<CirclePlay color="brand"/>}
                    onClick={() => {}}
                />
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
        this.setState({
            showHelp : false
        });        
    }
}

export default BottomActionBar;