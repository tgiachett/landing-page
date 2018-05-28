import React, { Component } from "react";



class Sun extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      box: {
        x: window.innerWidth,
        y: window.innerHeight
      }
    }
  
  }

  componentDidMount() {

  let earth = this.refs.earthRef
  
  

  
  this.setState({
    box: {
      width: earth.getBoundingClientRect().width,
      height: earth.getBoundingClientRect().height,
      x:earth.getBoundingClientRect().x,
      y: earth.getBoundingClientRect().y
    }
  })
    
  }



//style={{ backgroundColor: "#11031d"}}
  render() {
    
    let viewbox = `${this.state.box.x} ${this.state.box.y} ${this.state.box.width} ${this.state.box.height}`

    return (
      
      <svg  xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox={viewbox} height={window.innerHeight} width={window.innerWidth}>
        <defs>
        
        <filter id="filter4390">
          <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
        </filter>
        <filter id="planetFilter">
          <feGaussianBlur in="SourceGraphic" stdDeviation=".7" />
        </filter>
        </defs>

        <circle cx={window.innerWidth/2} cy={window.innerHeight/2} r="30" fill="#fa3" stroke="none" style={{filter: 'url(#filter4390)'}}/>
        
        <ellipse id="planet1Orbit" cx={window.innerWidth/2} cy={window.innerHeight/2} rx="300" ry="100" fill="none" stroke="black"/>
        
        <circle ref='earthRef' id="planet1" cx={window.innerWidth/2 -300} cy={window.innerHeight/2} r="15" fill="#336" stroke="none" style={{filter: 'url(#planetFilter)'}}>
          <animateMotion begin="0s" dur="360s" repeatCount="indefinite" path="M-000,0a300,100 0 1,0 600,0a300,100 0 1,0 -600,0" />
          
        </circle>
        
        
        <ellipse id="planet2Orbit" cx={window.innerWidth/2} cy={window.innerHeight/2} rx="360" ry="120" fill="none" stroke="black"/>
        <circle id="planet2" cx={window.innerWidth/2 -300} cy={window.innerHeight/2} r="10" fill="#e86" stroke="none" style={{filter: 'url(#planetFilter)'}}>
          <animateMotion begin="0s" dur="720s" repeatCount="indefinite" path="M-060,0a360,120 0 1,0 720,0a360,120 0 1,0 -720,0"/>
        </circle>

        {/* <ellipse id="planet3Orbit" cx={window.innerWidth/2} cy={window.innerHeight/2} rx="420" ry="140" fill="none" stroke="black"/> */}

      </svg>
    )
  }

  // path="M-060,0a360,120 0 1,0 720,0a360,120 0 1,0 -720,0"
}

export default Sun