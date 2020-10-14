import React, { Component } from 'react';
import Buttony from './component/Button';
import logo from './logo.svg';
import './App.css';
import Editors from './component/Editor/Editor';
import Searchbar from './component/Searchbar/Searchbar';
import Menus from './component/Menu';
import Header from './component/Header';
import Cards from './component/Card/Card';
import PanelMenus from './component/PanelMenus/PanelMenu';
import Toprightbar from './component/Toprightbar/Toprightbar';
import Carousels from './component/Carousel/Carousel';
import TopProfile from './component/Topprofile/Topprofile';
import ScrollPanel from './component/ScrollPanel/Scrollpanel';
import FullCalendars from './component/FullCalendar/FullCalendar';
import Calendars from './component/Calendar/Calendar';
import Sidebars from './component/Sidebar/Sidebar';
import {Card} from 'primereact/card';
import Sticky from 'react-stickynode';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';








class Apps extends Component {

  render() {
    return (

      


      <div className="p-grid">

        <div className="p-col-12" style={{ backgroundColor: '#4095eb' }}>



          <div className="p-grid p-justify-between" style={{ marginTop: '.25em' }}>

            <div className="p-col-1" style={{ textAlign: 'center' }}><img src='http://www.talencia.cat/mypics/max/2/21994_facebook-logo-clear-background.jpg' height="42" width="42" /></div>
            <div className="p-col-4" style={{ textAlign: 'center' }}><Searchbar /></div>
            <div className="p-col-2" style={{ textAlign: 'center' }}><Toprightbar /></div>

          </div>




        </div>



        <div className="p-col-2" style={{ backgroundColor: '#f2f2f2', borderRight: 'solid', borderColor: 'white' }}>
          <Sticky>


            <div className="p-col-12" style={{ borderBottom: 'solid', borderColor: 'white' }} >
              <TopProfile />
            </div>
            <div className="p-col-12" style={{ textAlign: 'center', marginTop: '.80em' }}>
              <Menus />
            </div>
            <div className="p-col-12" >


            </div>
          </Sticky>
        </div>


        <div className="p-col-8" style={{ backgroundColor: '#f2f2f2' }}>
          <div className="p-col-12" style={{ borderBottom: 'solid', borderColor: 'white' }} > <Editors /> </div>
          <div className="p-col-12" > <Cards /> <br/> <Cards /><br/> <Cards /></div>
        </div>




        <div className="p-col-2" style={{ backgroundColor: '#f2f2f2', borderLeft: 'solid', borderColor: 'white' }} >
          <Sticky enabled={true}>
            <div className="p-grid">
              <div className="p-col-12" style={{ backgroundColor: '#f2f2f2', borderBottom: 'solid', borderColor: 'white', marginTop: '.30em' }}>
                <Carousels />
              </div>
              <div className="p-col-12" style={{ borderBottom: 'solid', borderColor: 'white', marginTop: '.30em' }} >
                <ScrollPanel />
              </div>
              <div className="p-col-12" style={{ backgroundColor: '#f2f2f2', marginTop: '.80em' }}>
                <PanelMenus/>
              </div>
            </div>
          </Sticky>
        </div>

        <div className="p-col-12" style={{ backgroundColor: '#4095eb' }}> Copyright </div>

      </div>
    

    );
  }
}

export default App;
