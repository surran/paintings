import React, { Component } from 'react';
import styled from 'styled-components';

class CommentBook extends Component {
  constructor(props) {
    super(props);
    this.state = {imageIndex:0};
    this.nextImage = this.nextImage.bind(this);
    this.prevImage = this.prevImage.bind(this);
  }

  nextImage(){

    let nextIndex = this.state.imageIndex
    if (this.state.imageIndex < this.props.imagePath.length - 1) 
      nextIndex = this.state.imageIndex + 1
    this.setState({imageIndex: nextIndex})
  }

  prevImage(){
    let prevIndex = this.state.imageIndex
    if (this.state.imageIndex > 0) 
      prevIndex = this.state.imageIndex - 1
    this.setState({imageIndex: prevIndex})
  }

  computeDetails(i)
  {
    if (i < 5) return {date: "26th November, 2016", venue: "Gaiety Theatre, Shimla", exhibition: "Painter to Melodies", src:"img/posters/web_pom1.jpg"}
    if (i < 11) return {date: "27th November, 2016", venue: "Gaiety Theatre, Shimla", exhibition: "Painter to Melodies", src:"img/posters/web_pom1.jpg"}
    if (i < 20) return {date: "9th December, 2017", venue: "Gaiety Theatre, Shimla", exhibition: "17 Paintings", src:"img/posters/web_17paintings.jpg"}
    if (i < 29) return {date: "10th December, 2017", venue: "Gaiety Theatre, Shimla", exhibition: "17 Paintings", src:"img/posters/web_17paintings.jpg"}  
  }

  render() {
    let pageText = "Page " + (this.state.imageIndex + 1)  + " of " + this.props.imagePath.length
    let details = this.computeDetails(this.state.imageIndex)
    let exhibitionText = "Exhibition: " + details.exhibition
    let venueText = "Venue: " + details.venue
    let dateText = "Date: " + details.date
    let imageSrc = details.src
    return (
      <React.Fragment>
              <span style={{position:"fixed", width:"100%", height: "100%", top:"0px", left: "0px", backgroundColor:"black", opacity:"0.75", zIndex:"20"}}>
              </span>
              <ImageFrame>
                <img  src={this.props.imagePath[this.state.imageIndex]} style={{width:"calc(100% - 20px)", maxWidth:"1200px", margin:"10px", objectFit: "contain", maxHeight: "730px"}}/>
                <span style ={{marginLeft:"10px"}}>{this.props.desc}</span>
                <div style={{position:"fixed", top:"40%", right:"10px", width:"50px", height:"50px", backgroundColor:"silver", borderRadius:"25px", cursor:"pointer", "opacity": ".8" }}
                   onClick = {()=> {this.nextImage()}}>
                   <svg height="50" width="50" fill="none" stroke="white"  strokeWidth="5" viewBox="0 0 100 100" style={{marginLeft:"13px", marginTop:"13px"}}>
                    <path d="M15 5 L35 25 L15 45 L35 25 Z" />
                  </svg></div>
                <div style={{position:"fixed", top:"40%", left:"10px", width:"50px", height:"50px", backgroundColor:"silver", borderRadius:"25px", cursor:"pointer", "opacity": ".8"  }}
                   onClick = {()=> {this.prevImage()}}>
                  <svg height="50" width="50" fill="none" stroke="white" strokeWidth="5" viewBox="0 0 100 100" style={{marginLeft:"10px", marginTop:"13px"}}>
                    <path d="M35 5 L15 25 L35 45 L15 25Z" />
                  </svg>
                </div>
                <div style={{position:"absolute", height:"250px", width:"250px", right:"0px", bottom:"0px", display:"none"}}>
                  {pageText}<br/>
                  {exhibitionText}<br/>
                  <img src ={imageSrc} style={{width:"230px"}}/><br/>
                  {venueText}<br/>
                  {dateText}<br/>
                </div>
                <div style={{position:"absolute", width:"100%", right:"0px", bottom:"0px", color:"#555555"}}>
                  &nbsp;&nbsp;{pageText}&nbsp;&nbsp;|<span style={{color:"#8888bb"}}>&nbsp;&nbsp;{exhibitionText}&nbsp;&nbsp;&nbsp;&nbsp;{venueText}&nbsp;&nbsp;&nbsp;&nbsp;{dateText}</span>
                </div>
              </ImageFrame>
              <svg onClick={()=> this.props.closeCommentBook()} height="20" width="20" data-radium="true" style={{zIndex:"40", position: "fixed", cursor: "pointer", top: "15px", right: "15px"}}>
                <polyline points="0,0 20,20 10,10 20,0 0,20" data-radium="true" style={{fill: "none", stroke: "rgb(224, 224, 224)", strokeWidth: "3"}}>
                </polyline>
              </svg>
              
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



export default CommentBook;
  