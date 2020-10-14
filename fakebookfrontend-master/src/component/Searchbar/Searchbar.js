import React, { Component } from 'react';
import {InputText} from "primereact/inputtext";
import {Button} from 'primereact/button';
import './Searchbar.css';


class Searchbar extends Component {
  render() {
    return (

      
      <div className="p-col-12">
        <div className="p-inputgroup">
          <InputText placeholder="Keyword" style={{width: '1000px'}} />
          <Button icon="pi pi-search" />
        </div>
      </div>
      

    );
  }
}

export default Searchbar;