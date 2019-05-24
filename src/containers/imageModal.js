import React, { Component } from 'react';
import styled from 'styled-components'

class ImageItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let imagePath = this.props.src
    let pathArray = imagePath.split('/')
    pathArray[pathArray.length - 1] = "web_" + pathArray[pathArray.length - 1] 
    let webImagePath = pathArray.join('/')
    return (
        <React.Fragment>
          <img  src={webImagePath} style={{cursor:"pointer", ...this.props.style}}/>
          <div style={{position:"fixed", width:"100%", height: "100%", backgroundColor:"white", opacity:".5"}}>
            <ImageModal>
              <img onClick={()=> {console.log("hello")}} src={imagePath} style={{width:"1200px"}}/>
            </ImageModal>
          </div>
        </React.Fragment>
    );
  }
}

const ImageModal = styled.div`
  height:1000px;
  width:1300px;
  background-color:white;
  @media (max-width: 768px) {
    height:100%;
    width:100%;
  }
`;

export default ImageItem;
