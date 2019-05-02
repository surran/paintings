import React, { Component } from 'react';
import MenuItems from './components/MenuItems'
import A17Paintings from './containers/A17Paintings'
import Utsav from './containers/Utsav'
import Pom from './containers/Pom'
import Media from './containers/Media'
import Posters from './containers/Posters'
import About from './containers/About'
import Books from './containers/Books'
import Collections from './containers/Collections'
import  Associations from './containers/Associations'
import { BrowserRouter as Router, Route} from "react-router-dom";
import { Scrollbars } from 'react-custom-scrollbars';
import styled from 'styled-components';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {menu:false};
    this.toggleMenu = this.toggleMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  toggleMenu(){
    this.setState({menu:!this.state.menu})
  }

  closeMenu(){
     this.setState({menu:false})
  }

  componentDidMount()
  {
    //this.scrollbar.scrollTop(0);
  }

  componentDidUpdate()
  {
   // this.scrollbar.scrollTop(0);
  }


  render() {
    let homeDir = ""

    return (
      <Router  basename={process.env.PUBLIC_URL}>
      <div style={{backgroundColor:"#fbfbfb",  margin: 0, padding: 0, fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'
  , WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", lineHeight:"1.6"}} className="App">
        
        {/* Header */}
        <div style={{height:"60px", width:"100%", backgroundColor:"white", boxShadow: "rgba(0, 0, 0, 0.05) 0px 2px 4px", zIndex:"10", position:"fixed"}}>
          <img style={{width:"200px", marginTop:"-35px"}} src= "img/sign_yellow.png"/>
          <MenuIcon onClick={this.toggleMenu}>
            <rect x="0" y="0" height="4" width="25" fill="maroon"></rect>
            <rect x="0" y="7" height="4" width="25" fill="maroon"></rect>
            <rect x="0" y="14" height="4" width="25" fill="maroon"></rect>
          </MenuIcon>
        </div>

        {/* Body */}
        <div style={{margin:"auto", textAlign:"center"}}>     
        <div style={{margin:" 0 auto"}}>     
          
          {/* Menu */}
          {(this.state.menu) &&
            <MobileMenu>
               <MenuItems closeMenu={this.closeMenu}/>
            </MobileMenu>
          }
          <DesktopMenu>
            <MenuItems closeMenu={this.closeMenu}/>
          </DesktopMenu>
          {/* Showcase */}    
          {(!this.state.menu) &&    
            <Showcase>
              <div style={{textAlign:"center" , backgroundColor:"", height:"100%", overflow:"hidden"}}>
                 <div ref={ scrollbar => { this.scrollbar = scrollbar } }
                             style={{ width:"100%", height: "100%" }}>
                  <div id="showcase" style={{ width:"calc(100% - 20px)", height: "100%", margin:"10px"}}>     
                   <Route path={homeDir + "/17paintings"} exact component={A17Paintings} />
                   <Route path={homeDir + "/utsav"} component={Utsav} />
                   <Route path={homeDir + "/painter-to-melodies"} component={Pom} />
                   <Route path={homeDir + "/posters"} component={Posters} />
                   <Route path={homeDir + "/print-media"} component={Media} />
                   <Route path={homeDir + "/associations"} component={Associations} />
                   <Route path={homeDir + "/collections"} component={Collections} />
                   <Route path={homeDir + "/"} exact component={Utsav} />
                   <Route path={homeDir + "/about"} component={About} />
                   <Route path={homeDir + "/books"} component={Books} />
                  </div>
                 </div>
              </div>
            </Showcase>
          }
          </div>
        </div>
      </div>
      </Router>
    );
  }
}

export default App;

const DesktopMenu = styled.div`
  position:relative;
    vertical-align: top;
    display:inline-block; 
    text-align:left;
    z-index:1;
    width:200px;
    background-color:#aaaaaa;
    
    margin: 0px;
    top:60px;
    color:#f5f5f5;
  @media (max-width: 768px) {
   display:none
    
  }

  @media (min-height: 852px) {
   position:fixed
   height:calc(100vh - 65px); 
  }
`;

const MobileMenu = styled.div`
  position:relative;
    vertical-align: top;
    display:inline-block; 
    text-align:left;
    z-index:1;
    width:200px;
    background-color:white;
    height:calc(100vh - 65px); 
    margin: 0px;

    top:60px;
    width:100%;
    color:gray;
  @media (min-width: 768px) {
    display:none
  }
`;

const Showcase = styled.div`
position:relative;  padding-left:200px; display:inline-block; max-width:calc(1024px - 200px); width:calc(100% - 200px); margin:0px; margin-top:60px;
  @media (max-height: 852px) {
   padding-left:0px;
  }

  @media (max-width: 768px) {
    padding-left:0px;
    width:100% ;
  }


`

const MenuIcon = styled.svg`
  padding-left: 20px; padding-right: 20px; width:25px; height:18px;
  position: absolute;
  top: 20px;
  right: 5px;
  @media (min-width: 768px) {
    display:none
  }
`