import React from 'react';
import Svg from './Svg';

class SvgJsonContainer extends React.Component {
  
  constructor(props) {
    super(props);
    
    let data = this.props.data
    
    console.log(data.children[0].attributes.fill)

    let initialState = {}
    function createState(data) {
      for (let i = 0; i < data.length; i++) {
        initialState[`style${i}`] = data[i].attributes.fill;
      }
    }
    createState(data.children)
    
    this.state = initialState
    console.log(initialState)
  }

padZero = (str, len) => {
    len = len || 2;
    var zeros = new Array(len).join('0');
    return (zeros + str).slice(-len);
}


hextoRgb = (hex) => {
  if (hex.indexOf('#') === 0) {
    hex = hex.slice(1);
}
  
  let r = parseInt(hex.slice(0, 2), 16),
      g = parseInt(hex.slice(2, 4), 16),
      b = parseInt(hex.slice(4, 6), 16);
      return [r, g, b]
}

getRandomColor =() => {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// insert markov chain

colorTransform = (orig, key) => {
  let color = this.hextoRgb(orig),
      randColorRgb = this.hextoRgb(this.getRandomColor());
      

let cycle = setInterval(() => {
  
      if (color[0] < randColorRgb[0]) {
        color.splice(0, 1, color[0]+1) 
        
      } else if (color[0] > randColorRgb[0]) {
        color.splice(0, 1, color[0]-1)
      } 

      if (color[1] < randColorRgb[1]) {
        color.splice(1, 1, color[1]+1) 
        
      } else if (color[1] > randColorRgb[1]) {
        color.splice(1, 1, color[1]-1);
      } 

      if (color[2] < randColorRgb[2]) {
        color.splice(2, 1, color[2]+1);
        
      } else if (color[2] > randColorRgb[2]) {
        color.splice(2, 1, color[2]-1);
      } 
    
      function componentToHex(c) {
          var hex = c.toString(16);
          return hex.length === 1 ? "0" + hex : hex;
      }
      function rgbToHex(r, g, b) {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b)
      }
    this.setState({
    
      [key]: `${rgbToHex(color[0], color[1], color[2])}`,
      
    
  })
  if (Math.abs(color[0] - randColorRgb[0]) === 0 && 
      Math.abs(color[1] - randColorRgb[1]) === 0 &&
      Math.abs(color[2] - randColorRgb[2]) === 0) {
        clearInterval(cycle);
        this.colorTransform(this.state[key], key);
      }
}, 30)
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

    )}

  }

    export default SvgJsonContainer ;