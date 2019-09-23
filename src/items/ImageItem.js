import React, { Component } from 'react';
import styled from 'styled-components'

class ImageItem extends Component {
  constructor(props) {
    super(props);
    this.state = {modal:false}
    this.OpenModal = this.OpenModal.bind(this)
    this.CloseModal = this.CloseModal.bind(this)
  }

  OpenModal()
  {
    this.setState({modal:true})
  }

  CloseModal()
  {
    this.setState({modal:false})
  }

  render() {
    let imagePath = this.props.src
    let pathArray = imagePath.split('/')
    pathArray[pathArray.length - 1] = "web_" + pathArray[pathArray.length - 1] 
    let webImagePath = pathArray.join('/')
    return (

        <React.Fragment>
          <span onClick={()=> this.OpenModal()}>
            <img  src={webImagePath}  style={{cursor:"pointer", ...this.props.style}}/>
          </span>
          {(this.state.modal) &&
            <React.Fragment>
              <span style={{position:"fixed", width:"100%", height: "100%", top:"0px", left: "0px", backgroundColor:"black", opacity:"0.75", zIndex:"20"}}>
              </span>
              <ImageFrame>
                <img  src={imagePath} style={{width:"calc(100% - 20px)", maxWidth:"1200px", margin:"10px", objectFit: "contain", maxHeight: "730px"}}/>
                <span style ={{marginLeft:"10px"}}>{this.props.desc}</span>
              </ImageFrame>
              <svg onClick={()=> this.CloseModal()} height="20" width="20" data-radium="true" style={{zIndex:"40", position: "fixed", cursor: "pointer", top: "15px", right: "15px"}}>
                <polyline points="0,0 20,20 10,10 20,0 0,20" data-radium="true" style={{fill: "none", stroke: "rgb(224, 224, 224)", strokeWidth: "3"}}>
                </polyline>
              </svg>
            </React.Fragment>
          }
        </React.Fragment>

    );
  }
}

const ImageFrame = styled.span`
  height:800px; 
  width:100%;
  max-width:1220px;
  left:calc(50% - 610px);
  top:50px;
  position:fixed;
  background-color:white;
  z-index:30;

  @media (max-width: 1240px) {
    width:100%;
    height: calc(100% - 35px);
    left: 0px;
    overflow: auto;
    top: 0px;
    padding-top: 35px;
  }
`;

export default ImageItem;
