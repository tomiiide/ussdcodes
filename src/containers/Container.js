import React, { Component } from 'react';
import Header from '../components/Header';
import TabMenu from '../components/TabMenu';
import Footer from '../components/Footer';


class Container extends Component{
  render() {
    return (
      <div>
        <Header />
        <TabMenu/>
        <Footer />
      </div>
    );
  }
}

export default Container;