import React from 'react';
import Svg from './Svg';

class SvgJsonContainer extends React.Component {
    
    constructor(props) {
        super(props);
        
        const paths = this.props.data.children;
        this.state = this.getInitialColorState(paths);
    }

    //helper method that loads initial state of colors from svg paths data
    getInitialColorState = (paths) => {
        let initialColorState = {};
        for (let i = 0; i < paths.length; i++) {
            initialColorState[`style${i}`] = paths[i].attributes.fill;
        }
        return initialColorState;
    }
    //helper method for converting hex colors to rgb
    hextoRgb = (hex) => {
        if (hex.indexOf('#') === 0) {
            hex = hex.slice(1);
        }
        
        let r = parseInt(hex.slice(0, 2), 16),
            g = parseInt(hex.slice(2, 4), 16),
            b = parseInt(hex.slice(4, 6), 16);
        return [r, g, b];
    }

    //helper method to go convert each channel to base 16
    channelToHex = (channel) => {
        const hex = channel.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    }

    //helper method to assemble hex from red green and blue hex channels
    rgbToHex = (r, g, b) => {
        return "#" + this.channelToHex(r) + this.channelToHex(g) + this.channelToHex(b);
    }
    //helper method that gets a random hex color
    getRandomColor =() => {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // the main color transformation method
    colorTransform = (orig, key) => {
        let color = this.hextoRgb(orig),
            targetColorRgb = this.hextoRgb(this.getRandomColor());
        // refactor determine negative or positive vector for each
        //set an interval for each value clearing the interval when each channel is done

        // for (let i = 0; color.length; i++) {
        //     let deltaSign = color[i]
        // }
        // function cycleOne (deltaSign, src, target) {
            
        // }

        let cycle = setInterval(() => {

            if (Math.abs(color[0] - targetColorRgb[0]) === 0 && 
                Math.abs(color[1] - targetColorRgb[1]) === 0 &&
                Math.abs(color[2] - targetColorRgb[2]) === 0) {
                clearInterval(cycle);
                //repeat with new color source value
                this.colorTransform(this.state[key], key);
            } else {
                if (color[0] < targetColorRgb[0]) {
                    color.splice(0, 1, color[0]+1); 
                    
                } else if (color[0] > targetColorRgb[0]) {
                    color.splice(0, 1, color[0]-1);
                } 
                
                if (color[1] < targetColorRgb[1]) {
                    color.splice(1, 1, color[1]+1) ;
                    
                } else if (color[1] > targetColorRgb[1]) {
                    color.splice(1, 1, color[1]-1);
                } 
                
                if (color[2] < targetColorRgb[2]) {
                    color.splice(2, 1, color[2]+1);
                    
                } else if (color[2] > targetColorRgb[2]) {
                    color.splice(2, 1, color[2]-1);
                } 
            }
            this.setState({
                
                [key]: `${this.rgbToHex(color)}`,
                
                
            });
            
        }, 30);
    }

    


    componentDidMount() {
        
        setTimeout(() => {
            for (let color in this.state) {
                this.colorTransform(this.state[color], color);
            }
            
        },3000);
    }

    render() {
        
        
        
        return (

            <Svg 
              xmlns='http://www.w3.org/2000/svg'
              viewBox={this.props.data.attributes.viewBox}
            // width={this.props.data.attributes.width}
            // height={this.props.data.attributes.height}
              height={this.props.height}
              id={this.props.id}
              paths={this.props.data.children}
              wholeJson={this.props.data}
              pathStyleState={this.state}
              style={this.props.style}
              preserveAspectRatio={this.props.preserveAspectRatio}

            >
            </Svg> 

        );}

}

export default SvgJsonContainer ;
