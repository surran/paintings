import React, { Component } from 'react';

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
          
        </React.Fragment>
    );
  }
}

export default ImageItem;
