import React, { Component } from 'react';
import { Link, withRouter} from "react-router-dom";


class ListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let match = this.props.location.pathname == "/" + this.props.link
    if (this.props.default && this.props.location.pathname == "/") {match = true;}
    let bgColor = match ? "maroon" : "inherit"
    let fgColor = match ? "white" : "inherit"

    return (
      <Link onClick={this.props.closeMenu} to={this.props.link} style={{textDecoration: "none", color:"inherit"}}>
        <li style={{padding:"10px 25px", color:"inherit", backgroundColor: bgColor, color: fgColor, cursor:"pointer"}}>     
          <span style={{fontSize:"13px"}}>{this.props.title}</span>
          <br/>
          <i><span style={{fontSize:"11px"}}>{this.props.subtitle}</span></i>
        </li>
      </Link>
    );
  }
}

export default withRouter(ListItem);
