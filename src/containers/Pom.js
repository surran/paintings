import React, { Component } from 'react';

class Pom extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

          <div style={{width:"calc(100%- 20px)", margin:"0px", overflow:"auto", padding:"10px" }}>
            <header><h1>Painter to Melodies</h1></header>
            <div style={{padding:"10px", fontSize: "13px", fontWeight: "100"}} align="justify">
              <img src="img/pom/pom.jpg" style={{width:"100%"}}/>
              <div style={{padding:"50px 25%"}}>
              <p>The exhibtion had on display a total of 29 paintings and was held in the month of November 2016</p>
              </div>
            </div>
          </div>
    );
  }
}



export default Pom;
 