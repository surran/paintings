import React, { Component } from 'react';
import ImageItem from '../items/ImageItem'

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

          <div style={{width:"calc(100%- 20px)", margin:"0px", overflow:"auto", padding:"10px" }}>
            <header><h1>Ranjan</h1></header>
            <div style={{padding:"10px", fontSize: "13px", fontWeight: "100"}} align="justify">
              <ImageItem src="img/ranjan.jpg" style={{width:"100%"}} desc="Surya Ranjan Shandil (born 1986) is an Indian artist based in Bengaluru, India."/>
              <div style={{padding:"50px 15%"}}>
              <p>
                Surya Ranjan Shandil (born 1986) is an Indian artist based in Bengaluru, India. He completed schooling in Shimla, India and attended IIT Kanpur for a bachelor's degree in Technology. He is a self taught artist. He has held a few  exhibitions his works in his hometown Shimla. 
                </p>
               </div>
            </div>
          </div>
    );
  }
}



export default About;
 