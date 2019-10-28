import React, { Component } from 'react';
import ImageItem from '../items/ImageItem'
import styled from 'styled-components';
import { withRouter } from "react-router-dom";
import {SiteHelmet} from '../components/SiteHelmet'


class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

          <div style={{width:"calc(100%- 20px)", margin:"0px", overflow:"auto", padding:"10px" }}>
            <SiteHelmet page={this.props.location}/>
            <header><h1>Ranjan</h1></header>
            <Container >
              <ImageItem src="img/ranjan.jpg" style={{width:"100%"}} desc="Surya Ranjan Shandil (born 1986) is an Indian artist based in Bengaluru, India."/>
              <div style={{padding:"50px 15%"}}>
              <p>
                Based in Bengaluru, artist Surya Ranjan Shandil brings many worlds into one: A person self taught in art, science  & technology, who believes in the mantra of self reliance. Representative of his background and views, it is no wonder that the underlying theme of his art is "multiplicity". 
                </p>
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

export default withRouter(About);
 