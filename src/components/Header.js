import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import AutoComplete from 'material-ui/AutoComplete';
import IconButton from 'material-ui/IconButton';
import Search from 'material-ui/svg-icons/action/search';
import {white} from 'material-ui/styles/colors';


let results = ['*44#', '*556#', '*123#'];


class Header extends Component{
constructor(props){
  super(props);
  this.state = {
  searchActive : false    
  };  
  this.handleSearchClick = this.handleSearchClick.bind(this);  
}


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
              <IconButton onClick={this.handleSearchClick}><Search color={white} /></IconButton>
              <AutoComplete
                dataSource={results}
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
