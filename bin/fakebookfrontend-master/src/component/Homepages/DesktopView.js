import React, { Component } from 'react';
import Buttony from '../Button';
import Editors from '../Editor/Editor';
import Searchbar from '../Searchbar/Searchbar';
import Menus from '../Menu';
import Header from '../Header';
import Cards from '../Card/Card';
import PanelMenus from '../PanelMenus/PanelMenu';
import Toprightbar from '../Toprightbar/Toprightbar';
import Carousels from '../Carousel/Carousel';
import TopProfile from '../Topprofile/Topprofile';
import ScrollPanel from '../ScrollPanel/Scrollpanel';
import FullCalendars from '../FullCalendar/FullCalendar';
import Calendars from '../Calendar/Calendar';
import Sidebars from '../Sidebar/Sidebar';
import DataTableDemo from '../Datatable/Datatable';
import DataTableSelectionDemo from '../Datatable/Selection';
import {Card} from 'primereact/card';
import Sticky from 'react-stickynode';
import {Button} from 'primereact/button';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homes from '../Home/Home';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';


class DesktopView extends Component {

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
      return (


        <div className="p-grid">

          <div className="p-col-12 p-md-12" style={{ backgroundColor: '#4095eb' }}>



            <div className="p-grid p-justify-between" style={{ marginTop: '.25em' }}>

              <div className="p-col-12 p-md-1" style={{ textAlign: 'center' }}><img src='http://www.talencia.cat/mypics/max/2/21994_facebook-logo-clear-background.jpg' height="42" width="42" /></div>
              <div className="p-col-12 p-md-4" style={{ textAlign: 'center' }}><Searchbar /></div>
              <div className="p-col-12 p-md-2" style={{ textAlign: 'center' }}><Toprightbar /></div>

            </div>

          </div>


          <div className="p-col-12 p-md-2" style={{ backgroundColor: '#f2f2f2', borderRight: 'solid', borderColor: 'white' }}>


            <Sticky>
              <div className="p-col-12" style={{ borderBottom: 'solid', borderColor: 'white' }} >
                <TopProfile />
              </div>
              <div className="p-col-12" style={{ textAlign: 'left', marginTop: '.80em' }}>
                <Menus />
              </div>
            </Sticky>
          </div>


          <div className="p-col-12 p-md-8" style={{ backgroundColor: '#f2f2f2' }}>
            <div className="p-grid p-justify-center">
              <div className="p-col-12" style={{ borderBottom: 'solid', borderColor: 'white' }}> <Editors /> </div>
              <div className="p-col-12 p-md-8"> <h2 style={{ textAlign: 'center' }}>Main Feed</h2><Cards/></div>
            </div>
          </div>




          <div className="p-col-12 p-md-2" style={{ backgroundColor: '#f2f2f2', borderLeft: 'solid', borderColor: 'white' }} >

            <Sticky>
              <div className="p-col-12" style={{ backgroundColor: '#f2f2f2', borderBottom: 'solid', borderColor: 'white', marginTop: '.30em' }}>
                <Carousels />
              </div>
              <div className="p-col-12" style={{ borderBottom: 'solid', borderColor: 'white', marginTop: '.30em' }} >
                <ScrollPanel />
              </div>
              <div className="p-col-12" style={{ backgroundColor: '#f2f2f2', marginTop: '.30em' }}>
                <PanelMenus/>
              </div>
            </Sticky>


          </div>

          <div className="p-col-12 p-md-12" style={{ backgroundColor: '#4095eb', height: '60px' }}> </div>

        </div>


      );
    }
}

export default DesktopView;
