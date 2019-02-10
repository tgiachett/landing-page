import "./breakpoints.css";
import React from 'react';
import SvgJsonContainer from './SvgJsonContainer';
const data = require('./mars.json');


class Profile extends React.Component {

render() {
    return (
        <div className='container' style={{display: 'flex', flexDirection: 'column',  marginTop:'.5vh', marginLeft: '.5vw'}}>
          <div>
            <SvgJsonContainer className="imageContainer" preserveAspectRatio="xMidYMid meet" height='85vh' style={{ marginLeft: 'auto', marginRight: 'auto' }}   data={data} />
          </div>  
          <div style={{height: '20px', fontSize: '2vh', alignText: 'left'}}>
            <h1 style={{margin: '0 ', padding: '0'}}>
            ReactJS NodeJS SQL NoSQL SVG
            </h1>
            <div style={{height: '30%', alignText: 'left'}}>
              <h1 style={{margin: '0 ', padding: '0'}}>
            Tobia Giachetti
              </h1>
              <div>
                <div style={{ display: 'float', marginRight: '1em'}}>
	         
	          <div style={{ float: 'left', marginLeft: '.25em'}}>tgiachett@gmail.com</div>
                </div>
                <br/>
                
                <a  href="https://www.linkedin.com/in/tobia-giachetti/">
                  <svg style={{marginLeft: '.25em', marginRight: '.5em', marginTop: '.5em'}} xmlns="http://www.w3.org/2000/svg" width='30px' viewBox="0 0 24 24">
                    <path  d="M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="https://github.com/tgiachett">
                  <svg xmlns="http://www.w3.org/2000/svg" width='30px'  viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
          
            
            </div>
          
          </div>
        </div>
    
  );
  }
}

export default Profile;
