import React, { Component } from 'react';
import PictureCollection from "./PictureCollection"
import { withRouter } from "react-router-dom";
import {SiteHelmet} from '../components/SiteHelmet'

class Posters extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let data = {title:"Posters of Past & upcoming events",
        c1:[{type:'PictureCard',
             text:"Utsav opening poster. Upcoming exhibition to be held in Bengaluru, 2019",
             src:"img/posters/utsav1.png", 
             link:""},
            {type:'PictureCard',
             text:"17 Paintings main poster. This exhibtion was held in Shimla, 2017",
             src:"img/posters/17paintings.jpg", 
             link:""},
            {type:'PictureCard',
             text:"Painter to Melodies event poster. This exhibtion was held in Shimla, 2016",
             src:"img/posters/pom.jpg", 
             link:""}
           ],
        c2:[{type:'PictureCard',
             text:"Utsav event poster. Upcoming exhibition to be held in Bengaluru, 2019",
             src:"img/posters/utsav2.png", 
             link:""},
             {type:'PictureCard',
             text:"Painter to Melodies main poster. This exhibtion was held in Shimla, 2016",
             src:"img/posters/pom1.jpg", 
             link:""}

           ]
      }

    return (
        <React.Fragment>
          <SiteHelmet page={this.props.location}/>
          <PictureCollection data={data}/>
        </React.Fragment>
    );
  }
}



export default withRouter(Posters);
  