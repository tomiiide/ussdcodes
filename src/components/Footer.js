import React, { Component } from 'react';


class Footer extends Component{

  render() {
    let footerStyle = {
      marginTop : "10px",
      textAlign: "center",
      backgroundColor: "rgb(33, 33, 33)",
      padding: "calc(6vw) 0",
      bottom: "0",
      color:"white"
    };

    
    
    return (
      <section style={footerStyle}>
        <div> Crafted with <span style={{ color: "red" }}>&hearts;</span> by <a href="https://twitter.com/tomiiide" style={{ color: "white" }}>tomiiide</a></div>
        <div> <a className="fa fa-github" href="https://github.com/tomiiide" style={{ fontSize : "36px",color:"white",textDecoration:"none", padding:"10px"}}></a> </div>
      </section>
    );
  }
}

export default Footer;
