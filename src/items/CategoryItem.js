import React, { Component } from 'react';

class CategoryItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {style} = this.props || {}
    return (
      <li style={{padding:"10px", color:"#212121", fontSize: "18px" , ...style}}>     
         {this.props.title}<br/><i>{this.props.subtitle}</i>
      </li>
    );
  }
}

export default CategoryItem;
