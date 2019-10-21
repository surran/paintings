import React, { Component } from 'react';
import ImageItem from '../items/ImageItem'
import { Link} from "react-router-dom";
import styled from 'styled-components';

class AUtsav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

          <div style={{width:"100%",  padding:"10px", display:"block", boxSizing:"border-box", minHeight:"1000px", margin:"0px"}}>
            <div >
                <header>
                  <h1>UTSAV</h1>
                  <p>An Overview</p>
                </header>
                <Column1 align="justify">
                  <p>On 14<sup>th</sup> October 2019, the three day long painting exhibition UTSAV came to a successful conclusion.
                  </p>
                  <p>
                  The exhibition was held in Rangoli Metro Art centre, which is one among Bengaluru's major cultural spaces for hosting such events. During all three days, the venue brimmed with activity, as multiple events in art, architecture and photography ran alongside each other.
                  </p>
                  <a target="blank"><ImageItem style={{width:"100%"}} src="img/utsav/i1.jpg"/></a>
                  <p>
                  Metro complex authorities also helped in marketing the exhibition by sharing its posters, photos and other info on their official Instagram, Facebook and Twitter handles.
                  </p>
                  <p>
                  In the exhibition hall, the paintings on display were a mix of two different painting styles. The more stylised audience connected well with 'blocks of color' paintings.
                  </p>
                  <a target="blank"><ImageItem style={{width:"100%"}} src="img/utsav/blocks_of_color.jpg"/></a>
                  <p>
                  These paintings depicted cultural themes in well balanced patterns of flat color and distinct form.
                  </p>
                  <p>
                  A discreet departure from these, were another set of paintings, executed to appeal an audience with more conventional tastes. These paintings also depicted cultural themes, but in a closer to life manner characterised by artistically casual brushwork.
                  </p>
                  <a target="blank"><ImageItem style={{width:"100%"}} src="img/utsav/casual_brush.jpg"/></a>
                  <p>
                  Variety in themes and painting styles made sure that nobody left the exhibition hall unimpressed.
                  </p>
                  <p>
                  <a target="blank"><ImageItem style={{width:"100%"}} src="img/utsav/i10.jpg"/></a>
                  
                  Audience gelled well with the artworks. The <Link to="/comments">Comment Book</Link> saw some very nice comments of appreciation. Among the visitors, the younger ones especially were keen on getting information on future exhibitions. A good number of people shared their email addresses in the 'Subscribe' sheet.
                  </p>
                  <a target="blank"><ImageItem style={{width:"100%"}} src="img/utsav/i8.jpg"/></a>

                  <p>
                  The Collection of Works (2010-17) book also drew curious attention. Numerous people leafed through it. Many also made sure to collect the exhibitor's visiting card for future reference.
                  </p>
                  <p>
                  <a target="blank"><ImageItem style={{width:"100%"}} src="img/utsav/i7.jpg"/></a>
                  
                  <a target="blank"><ImageItem style={{width:"100%"}} src="img/utsav/i9.jpg"/></a>
                  
                  To sum up, it was great to meet such a diverse audience consisting of painters, designers, architects, film makers, performing artists, event managers, journalists and technologists.</p>
                  
                  <p>The exhibition catalogue shall soon be available online on this website.</p>
                  <br/><br/>
                 </Column1>
                
                 <Column2>
                     <div style={{fontSize:"16px", background:"#eeeeff", padding:"10px"}}>On Social Media</div><p>
                     <a>Rangoli Metro Art Center (Instagram oct 14, 2019)<br/>
                       <ImageItem style={{width:"100%"}}  src="img/utsav/i5.png" desc="Rangoli Metro Art Center (Instagram oct 14, 2019)"
                       link= "https://www.instagram.com/p/B3lxzZUFLc4/"
                       /></a></p>
                     <hr/><p>
                     <a>Rangoli Metro Art Center (Facebook oct 14, 2019)<br/>
                       <ImageItem style={{width:"100%"}}  src="img/utsav/i7.png" desc="Rangoli Metro Art Center (Facebook oct 14, 2019)"
                       link= "https://www.facebook.com/RangoliMetroArtCenter/photos/pcb.2612216745497341/2612216312164051/?type=3&theater"
                       /></a></p>
                    <hr/><p>
                     <a>Rangoli Metro Art Center (Twitter oct 14, 2019)<br/>
                       <ImageItem style={{width:"100%"}}  src="img/utsav/i6.png" desc="Rangoli Metro Art Center (Twitter oct 14, 2019)"
                       link= "https://twitter.com/rangoliartmetro/status/1182232696589651968"
                       /></a></p>
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
    padding-right: 0px;
  }
`

const Column2 = styled.div`
  font-weight: 100;
  width: calc(50% - 15px);
  font-size: 13px;
  float:right;
  @media (max-width: 767px) {
    width:100%;
  }
`



export default AUtsav;
 