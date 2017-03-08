import React, { Component } from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import FlatButton from 'material-ui/FlatButton';

class GridContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      codes : props.codes
    }
  } 
  render() {
    return (
            <GridList style={{padding:"10px"}}>
            {this.state.codes.map((code) => (
              <GridTile
                key={code.code}
                title={code.details}
                style={{textAlign:"center"}}
              > <FlatButton style={{ fontSize: "45px", width: "100%", height: "100%" }}
                labelStyle={{ height: "100%", width: "100%" }}>{code.code}</FlatButton>
              </GridTile>
            )) }  
          </GridList>
    );
  }
}


export default GridContent;