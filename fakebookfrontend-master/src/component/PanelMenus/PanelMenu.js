import React, { Component } from 'react';
import {PanelMenu} from 'primereact/panelmenu';
import {Card} from 'primereact/card';

class PanelMenus extends Component {

        constructor() {
        super();
        this.state = {
            items:[
                {
                   label:'Policies',
                   icon:'pi pi-fw pi-file',
                   items:[
                       {
                         label:'Privacy Policy',
                         icon:'pi pi-fw pi-align-left'
                      },
                      {
                         label:'Cookies Policy',
                         icon:'pi pi-fw pi-align-right'
                      },
                      
                      

                         ]
                      },
                      
            
                {
                   label:'Contact',
                   icon:'pi pi-fw pi-pencil',
                   items:[
                      {
                         label:'Contact us',
                         icon:'pi pi-fw pi-align-left'
                      },
                      

                   ]
                },
                {
                   label:'Help',
                   icon:'pi pi-fw pi-plus-circle',
                   items:[
                      {
                         label:'Left',
                         icon:'pi pi-fw pi-align-left'
                      },
                      {
                         label:'Right',
                         icon:'pi pi-fw pi-align-right'
                      },
                      {
                         label:'Center',
                         icon:'pi pi-fw pi-align-center'
                      },
                      {
                         label:'Justify',
                         icon:'pi pi-fw pi-align-justify'
                      },

                   ]
                },
                {
                   label:'Report',
                   icon:'pi pi-fw pi-user',
                   items:[
                      {
                         label:'New',
                         icon:'pi pi-fw pi-user-plus',

                      },
                      {
                         label:'Delete',
                         icon:'pi pi-fw pi-user-minus',

                      },
                      {
                         label:'Search',
                         icon:'pi pi-fw pi-users',
                         items:[
                            {
                               label:'Filter',
                               icon:'pi pi-fw pi-filter',
                               items:[
                                  {
                                     label:'Print',
                                     icon:'pi pi-fw pi-print'
                                  }
                               ]
                            },
                            {
                               icon:'pi pi-fw pi-bars',
                               label:'List'
                            }
                         ]
                      }
                   ]
                },
                
             ]
        };
    }


  render() {


    return (

     <Card>
                <PanelMenu model={this.state.items}/>
      </Card>
     
    );
  }
}

export default PanelMenus;