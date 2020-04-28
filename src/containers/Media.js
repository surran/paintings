import React, { Component } from 'react';
import PictureCollection from "./PictureCollection"
import { withRouter } from "react-router-dom";
import SiteHelmet from '../components/SiteHelmet'

class Media extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let data2017 = {title:"Media coverage of Events",
        c1:[{type:'separator',
             text:"Press Releases in 2017",
             src:"", 
             link:""},           
            {type:'card',
             text:"Himachal Watcher (p. dec 7, 2017)",
             src:"img/17Paintings/hw.png", 
             link:"https://himachalwatcher.com/2017/12/07/self-taught-local-artist-to-exhibit-17-paintings-oil-painting-works-at-gaiety-shimla/"}
           ],
        c2:[{type:'card',
             text:"Divya Himachal (p. dec 10, 2017)",
             src:"img/17Paintings/dj.JPG", 
             link:"dj.JPG"},
            {type:'card',
             text:"Dainik Bhaskar (p. dec 10 and 11, 2017)",
             src:"img/17Paintings/np.JPG", 
             link:"np.JPG"}
           ]
      }

    let data2016 = {title:"",
        c1:[{type:'separator',
             text:"Press Releases in 2016",
             src:"", 
             link:""},           
            {type:'card',
             text:"Dainik Jagran (p. nov 27, 2016)",
             src:"img/pom/media2016.jpg", 
             link:""}
           ],
        c2:[]
      }

    return (
      <div>
          <SiteHelmet page={this.props.location}/>
          <PictureCollection data={data2017}/>
          <PictureCollection data={data2016}/>
      </div>
    );
  }
}



export default withRouter(Media);
 