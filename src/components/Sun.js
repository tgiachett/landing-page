import React, { Component } from "react";


class Sun extends Component {
  state = {
    animPath: null
  };



  render() {
    return (
      
      <svg xmlns="http://www.w3.org/2000/svg" height={window.innerHeight} width={window.innerWidth}>
        <defs>
        <filter id="filter4390">
          <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
        </filter>
        <filter id="planetFilter">
          <feGaussianBlur in="SourceGraphic" stdDeviation=".7" />
        </filter>
        </defs>

        <circle cx={window.innerWidth/2} cy={window.innerHeight/2} r="24" fill="#fa3" stroke="none" style={{filter: 'url(#filter4390)'}}/>
        <ellipse id="planet1Orbit" cx={window.innerWidth/2} cy={window.innerHeight/2} rx="300" ry="100" fill="none" stroke="black"/>
        <circle id="planet1" cx={window.innerWidth/2 -300} cy={window.innerHeight/2} r="7" fill="#336" stroke="none" style={{filter: 'url(#planetFilter)'}}>
          <animateMotion begin="0s" dur="60s" repeatCount="indefinite" path="M-000,0a300,100 0 1,0 600,0a300,100 0 1,0 -600,0" />    
        </circle>
        <ellipse id="planet2Orbit" cx={window.innerWidth/2} cy={window.innerHeight/2} rx="360" ry="120" fill="none" stroke="black"/>
        <circle id="planet2" cx={window.innerWidth/2 -300} cy={window.innerHeight/2} r="5" fill="#e86" stroke="none" style={{filter: 'url(#planetFilter)'}}>
          <animateMotion begin="0s" dur="30s" repeatCount="indefinite" path="M-060,0a360,120 0 1,0 720,0a360,120 0 1,0 -720,0" />    
        </circle>
      </svg>
    )
  }


}

export default Sun