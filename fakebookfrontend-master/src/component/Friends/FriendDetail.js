import React, { Component } from 'react';
import {InputText} from "primereact/inputtext";
import {Button} from 'primereact/button';
import {Menu} from 'primereact/menu';
import FriendsCards from './FriendsCards';
import axios from 'axios';





class FriendDetail extends Component {






  render() {
    
    return (

      <div>
    
    <div>
   
             
                  <div style={{ textAlign: 'Center' }}>

                    <div className="p-col-12">
                      <Button className="p-button-raised p-button-secondary" style={{ backgroundColor: 'white', borderColor: 'white', fontSize: '1.5em', fontWeight: 'bold' }} />
                    </div>
                  </div>
          
           
        </div>


      </div>
 

    );
  }
}

export default FriendDetail;