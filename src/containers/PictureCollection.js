import React, { Component } from 'react';

let column1 = {   float: "left",
    fontWeight: "100",
    width: "50%",
    fontSize: "13px",
    boxSizing: "border-box",
    paddingRight: "10px"
}

let column2 = {   float: "left",
    fontWeight: "100",
    width: "calc(50% - 15px)",
    fontSize: "13px",
}

class PictureCollection extends Component {
  constructor(props) {
    super(props);
  }

  processItem(item, idx, length) {
    let style = {};
    if (item.type == "PictureCard") style = {textDecoration:"none", color:"black"}
    return(
         <React.Fragment>
           {(item.type == "PictureCard") &&
            <React.Fragment>
              <p>
                <a href={item.link} target="blank" style={{...style}}>
                  <img style={{width:"100%", marginTop:"10px"}} src={item.src} />
                  <br/>{item.text}<br/>
                  
                </a>
              </p>
              </React.Fragment>
           }
           {(item.type == "card") &&
            <React.Fragment>
              <p>
                <a href={item.link} target="blank" style={{...style}}>
                  <br/>{item.text}<br/>
                  <img style={{width:"100%", marginTop:"10px"}} src={item.src} />            
                </a>
              </p>
              {(idx !== length - 1) && <hr/>}
            </React.Fragment>
           }
           {(item.type == "separator") &&
             <div style={{fontSize:"16px", background:"#eeeeff", padding:"10px"}}>{item.text}</div>
           }
         </React.Fragment>
        );
  }

  render() {
    let data = this.props.data

    let c1 = data.c1.map((item, idx) => {
        return this.processItem(item, idx, data.c1.length)
      })

    let c2 = data.c2.map((item, idx) => {
        return this.processItem(item, idx, data.c2.length)
      })

    return (

          <div style={{width:"100%",  padding:"10px", display:"block", boxSizing:"border-box", margin:"0px"}}>
            <div >
                <header>
                  <h1>{data.title}</h1>
                </header>
                <div style={{...column1}} align="justify">
                  
                    {c1}                    
                 </div>
                
                 <div style={{...column2}} align="justify">
                   {c2}  
                 </div>
              </div>
            </div>
    );
  }
}



export default PictureCollection;
 