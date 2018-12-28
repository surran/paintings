import React, { Component } from 'react';
import PictureCollection from "./PictureCollection"

class Posters extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let data = {title:"Posters",
        c1:[{type:'PictureCard',
             text:"The exhibtion had on display a total of 29 paintings and was held in the month of November 2016",
             src:"img/posters/utsav2.png", 
             link:""},
            {type:'PictureCard',
             text:"The exhibtion had on display a total of 29 paintings and was held in the month of November 2016",
             src:"img/posters/17paintings.jpg", 
             link:""},
            {type:'PictureCard',
             text:"The exhibtion had on display a total of 29 paintings and was held in the month of November 2016",
             src:"img/posters/pom.jpg", 
             link:""}
           ],
        c2:[{type:'PictureCard',
             text:"The exhibtion had on display a total of 29 paintings and was held in the month of November 2016",
             src:"img/posters/utsav1.png", 
             link:""},
             {type:'PictureCard',
             text:"The exhibtion had on display a total of 29 paintings and was held in the month of November 2016",
             src:"img/posters/pom1.jpg", 
             link:""}

           ]
      }

    return (
          <PictureCollection data={data}/>
    );
  }
}



export default Posters;
  