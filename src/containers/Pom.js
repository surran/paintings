import React, { Component } from 'react';
import ImageItem from '../items/ImageItem'
import styled from 'styled-components'
import { withRouter } from "react-router-dom";
import {SiteHelmet} from '../components/SiteHelmet'

class Pom extends Component {
  constructor(props) {
    super(props);
  }

  render() {
   let  desc = "Photograhs from the event Painter to Melodies (Shimla, nov 2016)."
    return (

          <div style={{width:"calc(100%- 20px)", margin:"0px", overflow:"auto", padding:"10px" }}>
            <SiteHelmet page={this.props.location}/>
            <header><h1>Painter to Melodies</h1></header>
            <Container>
              <ImageItem src="img/pom/pom.jpg" style={{width:"100%"}} desc={desc}/>
              <span style={{fontSize:"12px"}}>{desc}</span>
              <div style={{padding:"50px 25%"}}>
              <p>The exhibtion had on display a total of 29 paintings.</p>
              </div>
            </Container>
          </div>
    );
  }
}

const Container = styled.div`
  font-weight: 100;
  font-size: 13px;
  padding: 10px;
  text-align: justify;
  @media (max-width: 767px) {
    font-weight: normal;
  }
`


export default  withRouter(Pom);
 