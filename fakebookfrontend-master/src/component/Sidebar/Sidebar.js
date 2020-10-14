import React, { Component } from 'react';
import {Sidebar} from 'primereact/sidebar';
import {Button} from 'primereact/button';
import Menus from '../Menu';


class Sidebars extends Component {
  constructor() {
        super();
        this.state = {
            visibleRight: false,
        };
    }

    render() {
        return (
            <div>

                <div className="content-section implementation">
                    <Sidebar visible={this.state.visibleLeft} baseZIndex={1000000} onHide={(e) => this.setState({visibleLeft: false})}>
                        <Menus />
                    </Sidebar>

                </div>
                    <Button icon="pi pi-bars" onClick={(e) => this.setState({visibleLeft:true})} style={{marginRight:'.25em', fontSize: '1.2em'}} /> 
            </div>
      

    );
  }
}

export default Sidebars;