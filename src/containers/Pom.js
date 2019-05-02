import React, { Component } from 'react';
import ImageItem from '../items/ImageItem'

class Pom extends Component {
  constructor(props) {
    super(props);
  }

  render() {
   let  desc = "Photograhs from the event Painter to Melodies (Shimla, nov 2017)."
    return (

          <div style={{width:"calc(100%- 20px)", margin:"0px", overflow:"auto", padding:"10px" }}>
            <header><h1>Painter to Melodies</h1></header>
            <div style={{padding:"10px", fontSize: "13px", fontWeight: "100"}} align="justify">
              <ImageItem src="img/pom/pom.jpg" style={{width:"100%"}} desc={desc}/>
              <span style={{fontSize:"12px"}}>{desc}</span>
              <div style={{padding:"50px 25%"}}>
              <p>The exhibtion had on display a total of 29 paintings.</p>
              </div>
            </div>
          </div>
    );
  }
}



export default Pom;
 