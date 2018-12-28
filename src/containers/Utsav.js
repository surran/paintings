import React, { Component } from 'react';

class Utsav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

          <div style={{width:"calc(100%- 20px)", margin:"0px", overflow:"auto", padding:"10px" }}>
            <header><h1>Utsav</h1></header>
            <div style={{padding:"10px", fontSize: "13px", fontWeight: "100"}} align="justify">
              <img src="img/utsav1.png" style={{width:"100%"}}/>
              <div style={{padding:"50px 25%"}}>
              <p>Blessings from a tusker to mark beginning of the Utsav series. A 17 painting 'wide angle' exploration running from Stone-age-art to Con-art and from Tansen to Bollywood.</p>
              <p>Poised for exhibition in Bengaluru (dussera 2019).</p>
              </div>
            </div>
          </div>
    );
  }
}



export default Utsav;
 