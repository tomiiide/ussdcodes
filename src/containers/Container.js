import React, { Component } from 'react';
import Header from '../components/Header';
import TabMenu from '../components/TabMenu';


class Container extends Component{
  render() {
    return (
      <div>
        <Header />
        <TabMenu/>
      </div>
    );
  }
}

export default Container;