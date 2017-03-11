import React, { Component } from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import FlatButton from 'material-ui/FlatButton';
import Snackbar from 'material-ui/Snackbar';


class GridContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      codes: props.codes,
      snackBarOpen: false,
      snackBarMessage: ''
    }
     this.copyToClipboard = this.copyToClipboard.bind(this);  
  } 


 /**
  * Copy text to clipboard using the execCommand('copy') hack.
  * May not work on Safari browser
  * @param {*string} text 
  */ 
  copyToClipboard(text) {
    /**
     * @todo clean this up
     * 
     */
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
      //copy to clipboard
      document.execCommand('copy');
      //delete created input element
      input.parentNode.removeChild(input);
      //show snackbar notification
      this.setState({ snackBarOpen: true, snackBarMessage: text + " copied" });
    } catch (err) {
      console.log("OOps, unable to copy ",err);
    }
}

  render() {
    return (
      <div>
      <GridList style={{ padding: "10px" }}>
        {//for each code create a grid tile 
          this.state.codes.map((code) => (
            
            <GridTile
              key={code.code}
              title={code.details}
              style={{ textAlign: "center" }}
              onClick={() => { this.copyToClipboard(code.code) }}
            > {console.log("added ",code.code," ",code.details)} <FlatButton style={{ fontSize: "45px", width: "100%", height: "100%" }}
              labelStyle={{ height: "100%", width: "100%" }}>{code.code}</FlatButton>
            </GridTile>
            
            ))}

      </GridList>
              <Snackbar
                open={this.state.snackBarOpen}
                message={this.state.snackBarMessage}
                autoHideDuration={2000}
                style={{textAlign:"center"}}
      > </Snackbar>
      </div>
    );
  }
}


export default GridContent;