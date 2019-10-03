import React, { Component } from 'react';
import ListItem from '../items/ListItem'
import CategoryItem from '../items/CategoryItem'

class MenuItems extends Component {
  constructor(props) {
    super(props);
  }

  c(str) {
    return str//.toUpperCase()
  }

  render() {
    const c = this.c
    return (

           <ul style={{listStyleType:"none", margin:"20px 0px", padding:"0px"}}>
              <div style={{textAlign: "center"}}>
                <img src="/img/me.jpg" style={{width: "100px"}}/>
              
              <CategoryItem title={c("Surya Ranjan Shandil")} style={{paddingTop: "3px", fontSize:"15px"}}/>
              </div>
              <ListItem title={c("About")} subtitle="" link="about"  closeMenu={this.props.closeMenu}/>
              <ListItem title={c("Books")} subtitle="" link="books"  closeMenu={this.props.closeMenu}/>
              {this.props.isMobile && 
                <ListItem title={c("Comments")} subtitle="" link="comments" 
                          closeMenu={() => {this.props.openCommentBook(); this.props.closeMenu()}}/>}
              {/*  <ListItem title="COLLECTIONS" subtitle="" link="collections"/>*/}
              <hr style={{border:"1px solid rgba(0,0,0,.12)", borderBottom:"none"}}/>
              <CategoryItem title={c("Exhibitions")} />
              <ListItem title={c("Utsav")} subtitle={c("Bengaluru 2019")} link="utsav" default={true}  closeMenu={this.props.closeMenu}/>
              <ListItem title={c("17 Paintings")} subtitle={c("Shimla 2017")} link="17paintings"  closeMenu={this.props.closeMenu}/>
              <ListItem title={c("Painter to Melodies")} subtitle={c("Shimla 2016")} link="painter-to-melodies" closeMenu={this.props.closeMenu}/>
              <hr style={{borderTop:"1px solid rgba(0,0,0,.12)", borderBottom:"none"}}/>
              <CategoryItem title={c("Outreach")} />
              <ListItem title={c("Posters")} subtitle="" link="posters" closeMenu={this.props.closeMenu}/>
              <ListItem title={c("Print Media")} subtitle="" link="print-media" closeMenu={this.props.closeMenu}/>
              <ListItem title={c("Associations")} subtitle="" link="associations" closeMenu={this.props.closeMenu}/>
              <CategoryItem title={c("Contact")} subtitle="+91 90962 96411 suryaran@gmail.com" closeMenu={this.props.closeMenu} />
            </ul>
    );
  }
}



export default MenuItems;
 
