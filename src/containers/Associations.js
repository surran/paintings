import React, { Component } from 'react';
import PictureCollection from "./PictureCollection"

class Associations extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let data = {title:"Associations",
        c1:[{type:'card',
             text:"Himachal Pradesh, Department of Language Art & Culture",
             src:"img/associations/lacartist.png", 
             link:"http://lacartist.hp.gov.in/ArtistDesc.aspx?PnID=ranjan"}
           ],
        c2:[{type:'card',
             text:"Artling",
             src:"img/associations/artling.png", 
             link:"https://theartling.com/en/artists/surya-ranjan-shandil/"}
           ]
      }

    return (
          <PictureCollection data={data}/>
    );
  }
}



export default Associations;
 