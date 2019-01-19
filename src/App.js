import React, { Component } from 'react';
import logo from './logo.svg';
//import './App.css';
import AppHeader from './Main/Header';
import DisplayItems from './Main/DisplayItems';
import OrderInformation from './Main/OrderInformation';
import AppFooter from './Main/Footer';




class App extends Component {
  render() {
    return (

        <div className="app-main">
        <AppHeader appName="Delivery App"/>
        <DisplayItems/>
        <OrderInformation/>
        <AppFooter/>
        </div>

    );
  }
}

export default App;
