import React, { Component } from 'react';
import styled from 'styled-components';
import { withRouter } from "react-router-dom";
import {SiteHelmet} from '../components/SiteHelmet'
import {CommentsHead} from '../components/CommentsHead'

class CommentBook extends Component {
  constructor(props) {
    super(props);
    this.state = {imageIndex:0, showDropDown: false};
    this.nextImage = this.nextImage.bind(this);
    this.prevImage = this.prevImage.bind(this);
    this.setImage= this.setImage.bind(this);
  }

  nextImage(){

    const imageIndex = Number(window.location.href.split("comments/")[1])
    let nextIndex =  imageIndex
    if (imageIndex < this.props.imagePath.length - 1) 
      nextIndex = imageIndex + 1
    else
      nextIndex = 0
    this.props.history.push("/comments/" + nextIndex)
  }

  setImage(index){
    if (index < this.props.imagePath.length && index >= 0) 
    this.props.history.push("/comments/" + index)
  }

  prevImage(){
    const imageIndex = Number(window.location.href.split("comments/")[1])
    let prevIndex = imageIndex
    if (imageIndex > 0) 
      prevIndex = imageIndex - 1
    else
      prevIndex = this.props.imagePath.length - 1
    this.props.history.push("/comments/" + prevIndex)
  }

  computeDetails(i)
  {
    if (i < 5) return {date: "26th November, 2016", venue: "Gaiety Theatre, Shimla", exhibition: "Painter to Melodies", src:"img/posters/web_pom1.jpg"}
    if (i < 11) return {date: "27th November, 2016", venue: "Gaiety Theatre, Shimla", exhibition: "Painter to Melodies", src:"img/posters/web_pom1.jpg"}
    if (i < 20) return {date: "9th December, 2017", venue: "Gaiety Theatre, Shimla", exhibition: "17 Paintings", src:"img/posters/web_17paintings.jpg"}
    if (i < 29) return {date: "10th December, 2017", venue: "Gaiety Theatre, Shimla", exhibition: "17 Paintings", src:"img/posters/web_17paintings.jpg"}
    if (i >= 29) return {date: " October, 2019", venue: "Rangoli Metro Art Center", exhibition: "UTSAV", src:"img/posters/web_17paintings.jpg"}    
  }

  

  render() {
    const imageIndex = Number(window.location.href.split("comments/")[1]) || 0
    const CancelButton = (props) => (<svg onClick={()=> {props.closeCommentBook(); return props.history.push("/")}} height="20" width="20" data-radium="true" style={{zIndex:"40", position: "fixed", cursor: "pointer", top: "15px", right: "15px", ...props.style}}>
                                        <polyline points="0,0 20,20 10,10 20,0 0,20" data-radium="true" style={{fill: "none", stroke: "rgb(224, 224, 224)", strokeWidth: "3"}}>
                                        </polyline>
                                      </svg>)
    const MenuButton = (props) => (<svg onClick={()=> {this.setState({showDropDown: !this.state.showDropDown})}} height="20" width="20" data-radium="true" style={{zIndex:"40", position: "fixed", cursor: "pointer", top: "15px", right: "15px", ...props.style}}>
                                        <polyline points="0, 3 20, 3" data-radium="true" style={{fill: "none", stroke: "rgb(224, 224, 224)", strokeWidth: "3"}}/>
                                        <polyline points="0, 10 20, 11" data-radium="true" style={{fill: "none", stroke: "rgb(224, 224, 224)", strokeWidth: "3"}}/>
                                        <polyline points="0, 17 20, 18" data-radium="true" style={{fill: "none", stroke: "rgb(224, 224, 224)", strokeWidth: "3"}}/>
                                   </svg>)
    let pageText = "Page " + (imageIndex + 1)  + " of " + this.props.imagePath.length
    const currentPage = imageIndex + 1
    const totalPages = this.props.imagePath.length
    let details = this.computeDetails(imageIndex)
    let exhibitionText = "Exhibition: " + details.exhibition
    let venueText = "Venue: " + details.venue
    let dateText = "Date: " + details.date
    const prefix = "postcard_"
    let imageSrc = details.src
    const transcript = this.props.transcriptPath[imageIndex]
    const showTranscript = transcript && document.getElementsByTagName("body")[0].clientWidth > 1240
    return (
      <React.Fragment>
              <SiteHelmet page={this.props.location}/>
              <span style={{position:"fixed", width:"100%", height: "100%", top:"0px", left: "0px", backgroundColor:"black", opacity:"0.75", zIndex:"20"}}>
              </span>
              <ImageFrame>
                <CommentsHead index={imageIndex} setIndex={this.setImage} showDropDown={this.state.showDropDown} setShowDropDown={(value) => this.setState({showDropDown: value})}/>
                <Desktop>
                  <CancelButton {...this.props} />
                  <img  src={this.props.imagePath[imageIndex]} 
                        style={{float:"left", width: "calc(50% - 10px)", maxWidth:"1200px", margin:"10px", objectFit: "contain", maxHeight: "calc(100% - 152px)"}}/>
                  <div style={{width: "calc(50% - 10px)",fontFamily: "Monospace", fontSize: "1.40vh", float: "right",marginTop:"50px", display: "inline-block"}}dangerouslySetInnerHTML={{ __html: transcript}}></div>
                </Desktop>
                <Mobile>
                  <CancelButton {...this.props} style={{left:"15px", right:"unset"}} />
                  <MenuButton {...this.props} style={{right:"15px"}}/>
                  <img  src={this.props.imagePath[imageIndex]} 
                        style={{float:"unset", width: "calc(100% - 20px)", maxWidth:"1200px", margin:"10px", objectFit: "contain", maxHeight: "calc(100% - 152px)", padding: "70px 0px 0px 0px"}}/>
                        <div style={{width: "100%",fontFamily: "Monospace", fontSize: "18px", padding:"5px 0px", textAlign: "center", display: "inline-block"}}>
                          <div style={{display: "inline-block", verticalAlign: "middle", width:"30px", height:"30px", borderRadius:"25px"}}>
                            <svg height="30" width="30" fill="none" stroke="#dddddd" strokeWidth="5" viewBox="0 0 100 100" style={{marginLeft:"6px", marginTop:"8px"}}>
                              <path d="M5 15 L30 40 L55 15 L30 35 L30 0 L30 35Z" />
                            </svg>
                          </div>
                          <div style={{display: "inline-block", padding: "0px 10px", color: "#cccccc"}}>Transcript</div>
                        </div>
                  <div style={{width: "calc(100% - 20px)",fontFamily: "Monospace", fontSize: "2.2vw", padding:"10px 0px 50px 0px", float: "right", display: "inline-block"}}dangerouslySetInnerHTML={{ __html: transcript}}></div>
                </Mobile>
 
                <span style ={{marginLeft:"10px"}}>{this.props.desc}</span>
                
                {/*Next Page*/}
                <div style={{position:"fixed", top:"40%", right:"10px", width:"50px", height:"50px", backgroundColor:"silver", borderRadius:"25px", cursor:"pointer", "opacity": ".8" }}
                   onClick = {()=> {this.nextImage()}}>
                   <svg height="50" width="50" fill="none" stroke="white"  strokeWidth="5" viewBox="0 0 100 100" style={{marginLeft:"13px", marginTop:"13px"}}>
                    <path d="M15 5 L35 25 L15 45 L35 25 Z" />
                  </svg>
                </div>
                
                {/*Prev Page*/}
                <div style={{position:"fixed", top:"40%", left:"10px", width:"50px", height:"50px", backgroundColor:"silver", borderRadius:"25px", cursor:"pointer", "opacity": ".8"  }}
                   onClick = {()=> {this.prevImage()}}>
                  <svg height="50" width="50" fill="none" stroke="white" strokeWidth="5" viewBox="0 0 100 100" style={{marginLeft:"10px", marginTop:"13px"}}>
                    <path d="M35 5 L15 25 L35 45 L15 25Z" />
                  </svg>
                </div>
                {/*
                
                {/*PageNumber*/}
                <div style={{position:"absolute",  userSelect: "none", width:"100%", right:"0px", paddingRight: "10px", lineHeight: "1", top:"100px", color:"#555555", textAlign: "right", fontSize: "12px"}}>
                  <div style={{fontSize: "40px", display:"inline-block"}}>{currentPage}</div>
                  <div style={{fontSize: "12px", display:"inline-block"}}>&nbsp;of<br/>{totalPages}</div>
                </div>
              </ImageFrame>

              {/*Cancel Button*/}
              
              
      </React.Fragment>
    );
  }
}

const ImageFrame = styled.span`
  height:800px; 
  max-height: calc(100% - 160px);
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
    max-height: calc(100% - 35px);
  }
`;



const Desktop = styled.span`
  @media (max-width: 1240px){
    display: none
  }
` 
const Mobile = styled.div`
  @media (min-width: 1241px){
    display: none
  }
` 



export default withRouter(CommentBook);
  
