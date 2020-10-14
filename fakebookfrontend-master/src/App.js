import React, { Component } from 'react';
import DesktopView from './component/Homepages/DesktopView';
import DesktopView2 from './component/Homepages/DesktopView2';
import MobileView from './component/Homepages/MobileView';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {

  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
      showMessage: false
    };

  }

  _showMessage = (bool) => {
    this.setState({
      showMessage: bool
    });
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };





  render() {
    const { width } = this.state;
    const isMobile = width <= 750;

    if (isMobile) {
      return (
        <BrowserRouter>
        <div> <MobileView /> </div>
        </BrowserRouter>
      );



    } else {
      return (
        <BrowserRouter>
        <div> <DesktopView2 /> </div>
        </BrowserRouter>
      );
    }
  }
}

export default App;
