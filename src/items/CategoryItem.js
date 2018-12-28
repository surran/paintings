import React, { Component } from 'react';

class CategoryItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li style={{padding:"10px", color:"gray"}}>     
         {this.props.title}<br/><i>{this.props.subtitle}</i>
      </li>
    );
  }
}

export default CategoryItem;
