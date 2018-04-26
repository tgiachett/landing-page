import React, { Component } from "react";


class Sun extends Component {
  state = {
    animPath: null
  };



  render() {
    return (
      
      <svg xmlns="http://www.w3.org/2000/svg" height={window.innerHeight} width={window.innerWidth}>
        <ellipse id="orbit" cx={window.innerWidth/2} cy={window.innerHeight/2} rx="300" ry="100" fill="white" stroke="black"/>
        <circle cx={window.innerWidth/2} cy={window.innerHeight/2} r="40" fill="white" stroke="black"/>
        <circle cx={window.innerWidth/2 -300} cy={window.innerHeight/2} r="20" fill="white" stroke="black">
          <animateMotion begin="0s" dur="60s" repeatCount="indefinite" path="M-000,0a300,100 0 1,0 600,0a300,100 0 1,0 -600,0" >
            
          </animateMotion>
        </circle>
      </svg>
    )
  }


}

export default Sun