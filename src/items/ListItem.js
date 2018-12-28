import React, { Component } from 'react';
import { Link, withRouter} from "react-router-dom";


class ListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let match = this.props.location.pathname == this.props.link
    if (this.props.default && this.props.location.pathname == "/") {match = true;}
    let color = match ? "maroon" : "inherit"
    return (
      <Link to={this.props.link} style={{textDecoration: "none",  color:"#f5f5f5"}}>
        <li style={{padding:"10px 25px", color:"#f5f5f5", backgroundColor: color, cursor:"pointer"}}>     
          <span style={{fontSize:"13px"}}>{this.props.title}</span>
          <br/>
          <i><span style={{fontSize:"11px"}}>{this.props.subtitle}</span></i>
        </li>
      </Link>
    );
  }
}

export default withRouter(ListItem);
