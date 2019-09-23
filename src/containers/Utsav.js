import React, { Component } from 'react';
import ImageItem from '../items/ImageItem'

class Utsav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

          <div style={{width:"calc(100%- 20px)", margin:"0px", overflow:"auto", padding:"10px" }}>
            <header><h1>Utsav</h1></header>
            <div style={{padding:"10px", fontSize: "13px", fontWeight: "100"}} align="justify">
              <ImageItem src="img/utsav1.png" style={{width:"100%"}} desc="Poster of the upcoming exhibition Utsav."/>
              <span style={{fontSize:"12px"}}>Poster of the upcoming exhibition Utsav.</span>
              <div style={{padding:"50px 15%"}}>
              </div>
            </div>
          </div>
    );
  }
}



export default Utsav;
 