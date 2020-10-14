import React, { Component } from 'react';
import {Menu} from 'primereact/menu';
import {Card} from 'primereact/card';
import './Menu.css';
class Menus extends Component {

 constructor() {
        super();
        this.state = {
            items: [
                
                {
                    label: 'Menu',
                    items: [{label: 'Home', icon: 'pi pi-fw pi-cog', command:()=>{ window.location="/"; }},
                            {label: 'Covid Stats App', icon: 'pi pi-fw pi-cog', command:()=>{ window.location="/CovidApp"; }},
                            {label: 'Crud App', icon: 'pi pi-fw pi-desktop', command:()=>{ window.location="/CrudApp";}},
                             ]
                }
            ]
        };
    }

    render() {
        return (
            <Card>
            <div>
                    <Menu model={this.state.items} style={{width: '100%', textAlign: 'left'}}/>
            </div>
            </Card>
        )
    }
}

export default Menus;