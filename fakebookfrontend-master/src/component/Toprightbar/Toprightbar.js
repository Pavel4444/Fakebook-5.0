import React, { Component } from 'react';
import {InputText} from "primereact/inputtext";
import {Button} from 'primereact/button';
import {Menu} from 'primereact/menu';
import Menus from '../Menu';
import axios from 'axios';
import {Dialog} from 'primereact/dialog';
import { NavLink } from 'react-router-dom';





class Toprightbar extends Component {



  render() {
    return (

      <div>
       <NavLink to="/Friends"><Button Button icon="pi pi-user" className="p-button-raised p-button-secondary" style={{marginRight: '.25em', fontSize: '1.2em'}} /></NavLink>
        <Button Button icon="pi pi-comment" className="p-button-raised p-button-secondary" style={{marginRight: '.25em', fontSize: '1.2em'}} />
        <Button Button icon="pi pi-globe" className="p-button-raised p-button-secondary" style={{fontSize: '1.2em'}} />


      </div>
 

    );
  }
}

export default Toprightbar;