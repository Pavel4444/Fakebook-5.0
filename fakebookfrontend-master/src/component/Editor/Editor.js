import React, {Component} from 'react';
import {Editor} from "primereact/editor";
import {Button} from "primereact/button";
import {Card} from 'primereact/card';
import {Messages} from 'primereact/messages';
import {Message} from 'primereact/message';

class Editors extends Component {

    constructor() {
        super();
        this.state = {
            text1: '<div>How are you today?</div>',
            text2: ''
        };
        this.showSuccess = this.showSuccess.bind(this);
    }

    showSuccess() {
    this.messages.show({ severity: 'success', summary: 'Success Message', detail: 'Order submitted' });
}

  render() {

  

    return (
<Card style={{marginBottom: '.9em'}}>
<div className="p-col-12" style={{ borderBottom: 'solid', borderColor: 'white' }}>
            <Messages ref={(el) => this.messages = el} />
            <h2 className="first">Write something</h2>
            <Editor style={{ height: '200px', marginBottom: '.25em'}}  value={this.state.text1} onTextChange={(e) => this.setState({ text1: e.htmlValue }) }/>
            
            <Button label="Post" onClick={this.showSuccess} className="p-button-raised p-button-success" style={{marginRight: '.25em'}} />
            <Button label="Delete" className="p-button-raised p-button-danger" onClick={() => this.setState({ text1: '' }) } />
                       

        </div>
</Card>
    );
  }
}

export default Editors;