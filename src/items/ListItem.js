import React, { Component } from 'react';
import { Link, withRouter} from "react-router-dom";


class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state={hover: false}
    this.mouseIn = this.mouseIn.bind(this)
    this.mouseOut = this.mouseOut.bind(this)

  }

  mouseIn()
  {
    this.setState({hover: true})
  }

  mouseOut()
  {
    this.setState({hover: false})
  }

  render() {
    let match = this.props.location.pathname == "/" + this.props.link
    if (this.props.default && this.props.location.pathname == "/") {match = true;}
    let hover = true;
    let bgColor = match ? "#080eb3" 
                  : this.state.hover ? "#eeeeee" : "inherit"
    let fgColor = match ? "white" : "inherit"

    return (
      <Link onMouseEnter={this.mouseIn} onMouseLeave={this.mouseOut} 
            onClick={this.props.closeMenu} to={this.props.link} style={{textDecoration: "none", color:"inherit"}} title={this.props.title}>
        <li style={{padding:"10px 25px", color:"inherit", backgroundColor: bgColor, color: fgColor, cursor:"pointer"}}>     
          <span style={{fontSize:"14px"}}>{this.props.title}</span>
          <br/>
          <i><span style={{fontSize:"12px"}}>{this.props.subtitle}</span></i>
        </li>
      </Link>
    );
  }
}

export default withRouter(ListItem);
