import React, { Component } from 'react';
import PictureCollection from "./PictureCollection"

class Media extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let data = {title:"Media",
        c1:[{type:'separator',
             text:"Press Releases",
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

    return (
          <PictureCollection data={data}/>
    );
  }
}



export default Media;
 