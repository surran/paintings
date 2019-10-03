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
                Based in Bengaluru, artist Surya Ranjan Shandil brings many worlds into one: A person self taught in art, science  & technology, who believes in the mantra of self reliance. Representative of his background and views, it is no wonder that the underlying theme of his art is "multiplicity". 
                </p>
               </div>
            </div>
          </div>
    );
  }
}



export default About;
 