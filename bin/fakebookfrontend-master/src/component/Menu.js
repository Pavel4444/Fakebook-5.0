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
                    label: 'Account',
                    items: [{label: 'Marketplace', icon: 'pi pi-fw pi-cog', command:()=>{ window.location.hash="/"; }},
                            {label: 'Groups', icon: 'pi pi-fw pi-users'},
                            {label: 'Pages', icon: 'pi pi-fw pi-desktop'},
                            {label: 'Friends', icon: 'pi pi-fw pi-user'},
                            {label: 'Messages', icon: 'pi pi-fw pi-comment'},
                            {label: 'Events', icon: 'pi pi-fw pi-calendar'},
                            {label: 'Settings', icon: 'pi pi-fw pi-cog'},
                            {label: 'Games', icon: 'pi pi-fw pi-play'},
                            {label: 'Places', icon: 'pi pi-fw pi-home'},
                            {label: 'Sign Out', icon: 'pi pi-fw pi-power-off'},
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