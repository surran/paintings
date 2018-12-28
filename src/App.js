import React, { Component } from 'react';
import ListItem from './items/ListItem';
import CategoryItem from './items/CategoryItem';
import A17Paintings from './containers/A17Paintings'
import Utsav from './containers/Utsav'
import Pom from './containers/Pom'
import Media from './containers/Media'
import Posters from './containers/Posters'
import Collections from './containers/Collections'
import  Associations from './containers/Associations'
import { BrowserRouter as Router, Route} from "react-router-dom";
import { Scrollbars } from 'react-custom-scrollbars';


class App extends Component {
  componentDidMount()
  {
    this.scrollbar.scrollTop(0);
  }

  componentDidUpdate()
  {
    this.scrollbar.scrollTop(0);
  }


  render() {

    return (
      <Router>
      <div style={{backgroundColor:"#fbfbfb"}} className="App">
        
        {/* Header */}
        <div style={{height:"60px", width:"100%", backgroundColor:"white", boxShadow: "rgba(0, 0, 0, 0.05) 0px 2px 4px", zIndex:"10"}}>
          <img style={{width:"200px", marginTop:"-35px"}}src="/img/sign_yellow.png"/>
        </div>

        {/* Body */}
        <div style={{maxWidth:"1024px", margin:"auto"}}>     
          
          {/* Menu */}
          <div style={{position:"relative", verticalAlign: "top", display:"inline-block",
                      width:"200px", left:"0px", backgroundColor:"#aaaaaa", height:"calc(100vh - 65px)", margin:"0px"}}>
            <ul style={{listStyleType:"none", margin:"20px 0px", padding:"0px"}}>
              <CategoryItem title="SURYA RANJAN SHANDIL" />
              <ListItem title="ABOUT" subtitle="" link="/about"/>
              <ListItem title="BOOKS" subtitle="" link="/books"/>
              <ListItem title="COLLECTIONS" subtitle="" link="/collections"/>
              <hr/>
              <CategoryItem title="EXHIBITIONS" />
              <ListItem title="UTSAV" subtitle="BENGALURU 2019" link="/utsav" default={true}/>
              <ListItem title="17 PAINTINGS" subtitle="SHIMLA 2017" link="/17paintings"/>
              <ListItem title="PAINTER TO MELODIES" subtitle="SHIMLA 2016" link="/painter-to-melodies"/>
              <hr/>
              <CategoryItem title="OUTREACH" />
              <ListItem title="POSTERS" subtitle="" link="/posters"/>
              <ListItem title="PRINT MEDIA" subtitle="" link="/print-media"/>
              <ListItem title="ASSOCIATIONS" subtitle="" link="/associations"/>
              <CategoryItem title="CONTACT" subtitle="+91 90962 96411 suryaran@gmail.com" />
            </ul>
          </div>
        
          {/* Showcase */}        
          <div style={{position:"relative",  display:"inline-block", width:"calc(100% - 250px)", height:"calc(100vh - 70px)", margin:"0px"}}>
            <div style={{textAlign:"center" , backgroundColor:"", height:"100%", overflow:"hidden"}}>
               <Scrollbars ref={ scrollbar => { this.scrollbar = scrollbar } }
                           style={{ width:"100%", height: "100%" }}>
                <div id="showcase" style={{ width:"calc(100% - 20px)", height: "100%" }}>     
                 <Route path="/17paintings" exact component={A17Paintings} />
                 <Route path="/utsav" component={Utsav} />
                 <Route path="/painter-to-melodies" component={Pom} />
                 <Route path="/posters" component={Posters} />
                 <Route path="/print-media" component={Media} />
                 <Route path="/associations" component={Associations} />
                 <Route path="/collections" component={Collections} />
                 <Route path="/" exact component={Utsav} />
                </div>
               </Scrollbars>
            </div>
          </div>

        </div>
      </div>
      </Router>
    );
  }
}

export default App;
