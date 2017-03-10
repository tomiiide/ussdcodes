import React, { Component } from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import FlatButton from 'material-ui/FlatButton';


class GridContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      codes : props.codes
    }
     this.copyToClipboard = this.copyToClipboard.bind(this);  
  } 

  copyToClipboard(text) {
    var input = document.createElement("input");
    input.type = "text";
    
    input.style.position = 'fixed';
    input.style.top = 0;
    input.style.left = 0;
    input.style.width = '2em';
    input.style.height = '2em';
    input.style.padding = 0;
    input.style.border = 'none';
    input.style.outline = 'none';
    input.style.boxShadow = 'none';
    input.style.background = 'transparent';
    
    document.body.appendChild(input);
    input.value = text;
    input.select();

    try {
      var success = document.execCommand('copy');
      var msg = success ? 'sucessful' : 'unsucessful'
      console.log("Copying text command was ", msg)
      input.parentNode.removeChild(input);
    } catch (err) {
      console.log("OOps, unable to copy");
    }
}

  render() {
    return (
            <GridList style={{padding:"10px"}}>
            {this.state.codes.map((code) => (
              <GridTile
                key={code.code}
                title={code.details}
                style={{ textAlign: "center" }}
                onClick={() => {this.copyToClipboard(code.code)}}
              > <FlatButton style={{ fontSize: "45px", width: "100%", height: "100%" }}
                labelStyle={{ height: "100%", width: "100%" }}>{code.code}</FlatButton>
              </GridTile>
            )) }  
          </GridList>
    );
  }
}


export default GridContent;