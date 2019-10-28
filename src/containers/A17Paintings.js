import React, { Component } from 'react';
import ImageItem from '../items/ImageItem'
import styled from 'styled-components';
import { withRouter } from "react-router-dom";
import {SiteHelmet} from '../components/SiteHelmet'

class A17Paintings extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

          <div style={{width:"100%",  padding:"10px", display:"block", boxSizing:"border-box", minHeight:"1000px", margin:"0px"}}>
            <div >
                <SiteHelmet page={this.props.location}/>
                <header>
                  <h1>17 Paintings</h1>
                  <p>An Overview</p>
                </header>
                <Column1>
                  <p>On the evening of 10<sup>th</sup> December 2017, the exhibition <b>17&nbsp;Paintings</b> came to a successful conclusion.</p>

                  <p>
                  The event was well attended by art lovers from across the city and outside. Gaiety Heritage Complex authorities once again provided great support, and the local media was exemplary in providing coverage during the entire course of the event. Above all, the exhibition was made possible by so many efforts and contibutions by my well wishers.</p>
                  <a target="blank"><ImageItem style={{width:"100%"}} src="img/17Paintings/i3.jpg"/></a>
                  <a target="blank"><ImageItem style={{width:"100%"}} src="img/17Paintings/i23.jpg"/></a>
                  <p>
                  The paintings connected well with the audience. Evocative works like <i>Monkeys</i> and Bollywood inspired paintings proved to be major crowd pullers. People enjoyed posing beside pictures of Gabbar Singh and Rajesh Khanna for a selfie. Paintings with more subtle subjects also generated interest. There were interesting discussions around interpretation of individual paintings. The audience loved expressionist works like <i>Frenzy</i> and <i>Personal Sunrise</i>.</p>
                  <p>
                  The occasion was lively with interaction. postcard prints sold well, especially ones of regional paintings like <i>Spiti</i> <i>Kaza</i> and <i>Solan Market</i>.  There was also demand for larger prints. Visitors subscribed for invitations to future exhibitions, and asked for high quality digital images of paintings they specially liked. </p>
                  <a target="blank"><ImageItem style={{width:"100%"}} src="img/17Paintings/i7.jpg"/></a>
                  <p>
                  On the point of art sales, the price of Rs 20,000/- per painting generated mixed feelings. People showed keen interest in opening conversations on commissioning/buying artworks, but as such the two day exhibition did not see any direct sale happening over the desk. </p>
                  <p>
                  The 'comment book' was a hit among the visitors, especially the young ones. They filled page after page with long and short notes, appreciating, suggesting and wishing well. There were also flavours of the local lingo in witty comments like "22g harkuch paintings" (great painting brother)</p>
                  <a target="blank"><ImageItem style={{width:"100%"}} src="img/17Paintings/i1.jpg"/></a>
                  <a target="blank"><ImageItem style={{width:"100%"}} src="img/17Paintings/i5.jpg"/></a>
                  <p>
                  All in all, the wonderful turnout and interaction made the event a great success. This was my second solo exhibition at Gaiety.</p>
                  <p>The exhibtion catalogue is available online on the link: <a href="../2017" target="blank">www.suryaranjanshandil.com/2017</a></p>
                  <br/><br/>
                 </Column1>
                
                 <Column2>
                     <div style={{fontSize:"16px", background:"#eeeeff", padding:"10px"}}>Press Releases</div><p>
                     <a>Himachal Watcher (p. dec 7, 2017)<br/>
                       <ImageItem style={{width:"100%"}}  src="img/17Paintings/hw.png" desc="Himachal Watcher (p. dec 7, 2017)"
                       link= "https://himachalwatcher.com/2017/12/07/self-taught-local-artist-to-exhibit-17-paintings-oil-painting-works-at-gaiety-shimla/"
                       /></a></p>
                     <hr/>
                     <p><a target="blank">Divya Himachal (p. dec 10, 2017)<br/><br/><ImageItem style={{width:"100%"}} desc="Divya Himachal (p. dec 10, 2017)" src="img/17Paintings/dj.JPG" /></a></p>
                     <hr/>
                     <p><a target="blank">Dainik Bhaskar (p. dec 10 and 11, 2017)<br/><br/><ImageItem style={{width:"100%"}} desc="Dainik Bhaskar (p. dec 10 and 11, 2017)" src="img/17Paintings/np.JPG" /></a></p>
                 </Column2>
              </div>
            </div>
    );
  }
}


const Column1 = styled.div`
  font-weight: 100;
  width: 50%;
  font-size: 13px;
  box-sizing: border-box;
  padding-right: 10px;
  text-align: justify;
  display:inline-block;
  @media (max-width: 767px) {
    width:100%;
    font-weight: normal;
    padding-right: 0px;
  }
`

const Column2 = styled.div`
  font-weight: 100;
  width: calc(50% - 15px);
  font-size: 13px;
  float:right;
  @media (max-width: 767px) {
    font-weight: normal;
    width:100%;
  }
`


export default withRouter(A17Paintings);
 