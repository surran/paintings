import React, { Component } from 'react';
import ListItem from '../items/ListItem'
import CategoryItem from '../items/CategoryItem'

class MenuItems extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

           <ul style={{listStyleType:"none", margin:"20px 0px", padding:"0px"}}>
              <CategoryItem title="SURYA RANJAN SHANDIL" />
              <ListItem title="ABOUT" subtitle="" link="about"  closeMenu={this.props.closeMenu}/>
              <ListItem title="BOOKS" subtitle="" link="books"  closeMenu={this.props.closeMenu}/>
              {/*  <ListItem title="COLLECTIONS" subtitle="" link="collections"/>*/}
              <hr/>
              <CategoryItem title="EXHIBITIONS" />
              <ListItem title="UTSAV" subtitle="BENGALURU 2019" link="utsav" default={true}  closeMenu={this.props.closeMenu}/>
              <ListItem title="17 PAINTINGS" subtitle="SHIMLA 2017" link="17paintings"  closeMenu={this.props.closeMenu}/>
              <ListItem title="PAINTER TO MELODIES" subtitle="SHIMLA 2016" link="painter-to-melodies" closeMenu={this.props.closeMenu}/>
              <hr/>
              <CategoryItem title="OUTREACH" />
              <ListItem title="POSTERS" subtitle="" link="posters" closeMenu={this.props.closeMenu}/>
              <ListItem title="PRINT MEDIA" subtitle="" link="print-media" closeMenu={this.props.closeMenu}/>
              <ListItem title="ASSOCIATIONS" subtitle="" link="associations" closeMenu={this.props.closeMenu}/>
              <CategoryItem title="CONTACT" subtitle="+91 90962 96411 suryaran@gmail.com" closeMenu={this.props.closeMenu} />
            </ul>
    );
  }
}



export default MenuItems;
 
