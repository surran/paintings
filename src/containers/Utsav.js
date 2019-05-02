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
              <ImageItem src="img/utsav1.png" style={{width:"100%"}} desc="Poster of the upcoming exhibition Utsav, oct 2019"/>
              <span style={{fontSize:"12px"}}>Poster of the upcoming exhibition Utsav, oct 2019.</span>
              <div style={{padding:"50px 15%"}}>
              <p>Blessings from a tusker to mark beginning of the Utsav series. A 17 painting 'wide angle' exploration running from Stone-age-art to Con-art and from Tansen to Bollywood.</p>
              <p>The series is slated for exhibition in Bengaluru in october, 2019.</p>
              </div>
            </div>
          </div>
    );
  }
}



export default Utsav;
 