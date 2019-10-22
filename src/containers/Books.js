import React, { Component } from 'react';
import ImageItem from '../items/ImageItem'
import styled from 'styled-components';

class Books extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

          <div style={{width:"calc(100%- 20px)", margin:"0px", overflow:"auto", padding:"10px" }}>
            <header><h1>A Collection of Paintings (2017 edition)</h1></header>
            <Container>
              <ImageItem src="img/book2017.JPG" style={{width:"100%"}} desc="A welcome addition to your coffee table collection."/>
              <span style={{fontSize:"12px"}}>A welcome addition to your coffee table collection.</span>
              <div style={{padding:"40px 8%"}}>
                <p>
                  This book is the first published edition by the artist and contains high quality color prints (each 12cm x 8cm approx) of 41 paintings done by him till December 2017. The paintings are categorized into: Dark Paintings, Surrealist Thought, Mountains, Travel, Faith, Celebration and Bollywood.
                </p>
                <p>The book is priced at Rs 999/-.  (signed on demand). To purchase or know more about the book get in touch with:</p>
                <center>Surya Ranjan Shandil<br/>+90962 96411 (watsapp/call)<br/>suryaran@gmail.com (email)</center>
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


export default Books;
 