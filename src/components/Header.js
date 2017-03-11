import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import AutoComplete from 'material-ui/AutoComplete';
import IconButton from 'material-ui/IconButton';
import Search from 'material-ui/svg-icons/action/search';
import {white} from 'material-ui/styles/colors';




class Header extends Component{
constructor(props){
  super(props);
  this.state = {
    searchActive: false,   
    results : ['*44#', '*556#', '*123#']  
  };  
  this.handleSearchClick = this.handleSearchClick.bind(this);  
}

/**
 * @todo add search functionality
 */
handleSearchClick(){
  console.log(this.state.searchActive);
  if (this.state.searchActive) {
    this.setState({ searchActive: false });
    this.SearchField.value = '';
  } else{
      this.setState({ searchActive: true }); this.SearchField.focus();
    }
  
};

  render(){
      return(
        <AppBar
          title="USSD Codes"
          style={{boxShadow : "none"}}      
    iconElementRight={
            <div>
              <IconButton
                onClick={this.handleSearchClick}>
                <Search color={white} />
              </IconButton>
              <AutoComplete
                dataSource={this.state.results}
                textFieldStyle={{ color: white, width: this.state.searchActive ? "" : "20px" }}
                name="search"
                style={{ color: white, width: this.state.searchActive ? "" : "20px" }}
                color="white"
                ref={(input) => { this.SearchField = input;}}></AutoComplete>
              </div>
            }
  />
      );
}; 
}

export default Header;
