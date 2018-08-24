import React from 'react';

class Svg extends React.Component {
  
  render() {
    let pathsSet;
    
    if (this.props.paths != null) {
      pathsSet = this.props.paths.map((p,i)=> {
         
        return <path key={i} d={p.attributes.d} fill={this.props.pathStyleState[`style${i}`]}/>
         
     })
    }
    
    
    return (

    <svg
   xmlns={this.props.xmlns}
   viewBox={this.props.viewBox}
   width={this.props.width}
   height={this.props.height}
   id={this.props.id}
   version="1.1">
    
      
    {pathsSet}

    </svg> 

    )}

  }

    export default Svg ;