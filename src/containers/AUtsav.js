import React, { Component } from 'react';
import ImageItem from '../items/ImageItem'
import { Link} from "react-router-dom";
import styled from 'styled-components';
import { withRouter } from "react-router-dom";
import SiteHelmet from '../components/SiteHelmet'

class AUtsav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

          <div style={{width:"100%",  padding:"10px", display:"block", boxSizing:"border-box", minHeight:"1000px", margin:"0px"}}>
            <div >
                <SiteHelmet page={this.props.location}/>
                <header>
                  <h1>UTSAV</h1>
                  <p>An Overview</p>
                </header>
                <Column1 align="justify">
                  <p>On 14<sup>th</sup> Oct. 2019, the three day painting exhibition UTSAV came to a successful conclusion.
                  </p>
                  <p>
                  The exhibition was held in Rangoli Metro Art Center, one of Bengaluru's major cultural spaces for such events. During all three days, the venue brimmed with activity, as multiple shows in architecture, painting and photography ran alongside each other.
                  </p>
                  <a target="blank"><ImageItem style={{width:"100%"}} src="img/utsav/i1.jpg"/></a>
                  <p>
                  The happenings were also relayed online on the Art Center's official Instagram, Facebook and Twitter channels. 
                   </p>
                  <p>
                  UTSAV was my third solo exhibition. The paintings put on display were a mix of two different styles. Catering to the more stylised audience were 'Patterns of Color' paintings.
                  </p>
                  <a target="blank"><ImageItem style={{width:"100%"}} src="img/utsav/blocks_of_color.jpg"/></a>
                  <p>
                  These paintings depicted cultural themes in balanced aggregations of flat colored forms.
                  </p>
                  <p>
                  A discreet departure from these, were another set of paintings, executed to appeal an audience with more conventional tastes. These paintings also depicted cultural themes, but in a closer to life manner characterised by casual brushwork.
                  </p>
                  <a target="blank"><ImageItem style={{width:"100%"}} src="img/utsav/casual_brush.jpg"/></a>
                  <p>
                  Variety in themes and painting styles made sure that nobody left the exhibition hall unimpressed.
                  </p>
                  <p>
                  <a target="blank"><ImageItem style={{width:"100%"}} src="img/utsav/i10.jpg"/></a>
                  
                  The audience was generous in their comments. Some also wrote nice words of appriciation in the <Link to="/comments/29">Comment Book</Link>. The younger visitors were keen on getting information on future exhibitions. A good number of people shared their email addresses in the 'Subscribe' sheet.
                  </p>
                  <a target="blank"><ImageItem style={{width:"100%"}} src="img/utsav/i8.jpg"/></a>

                  <p>
                  The Collection of Works (2010-17) book also drew curious attention. Numerous people leafed through it. Many also made sure to collect my visiting card for future reference.
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
    width:100%;
    font-weight: normal;
  }
`



export default  withRouter(AUtsav);
 