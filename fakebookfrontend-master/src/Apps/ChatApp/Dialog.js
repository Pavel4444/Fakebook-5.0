import React, { Component } from 'react';
import { Client } from '@stomp/stompjs';
import {InputText} from 'primereact/inputtext';
import { Button } from 'primereact/button';
import {Dialog} from 'primereact/dialog';
import {Card} from 'primereact/card';
import ChatApp from './Chatapp';


class Dialogs extends Component {

    constructor() {
        super();
        this.state = {
        


        };
    }


       renderFooter(name) {

         const { currentclickDisconnect} = this.props;
    return (
      <div>
        <InputText placeholder="Enter your message" id="in" onChange={(e) => this.setState({ value: e.target.value }) } style={{ marginRight: '.25em' }}/>
        <Button className="p-button-secondary" onClick={this.clickHandler} label="Send" iconPos="right" style={{ marginRight: '.25em' }}/>
        <Button className="p-button-secondary" onClick={currentclickDisconnect} label="Disconnect" iconPos="right" style={{ marginRight: '.25em' }}/>
      </div>
    );
  }


       clickHandler = () => {
   
    if (this.state.isLoggedInn) {

      this.client.publish({ destination: '/app/hello', body: JSON.stringify({ 'msg': this.state.value, 'name': this.state.name }) }); 
    }

    console.log('onConnect');

  }


  render(props) {

    const { currentTime ,currentTest , currentLoggedIn, currentFooter} = this.props;

  

    return (
        <div>
<Dialog header="Chat Room" visible={currentLoggedIn} footer={this.renderFooter('displayFooter') } closable={false} modal={false} >
            <Card style={{ minHeight: '30vw', width: '15vw'}}>

              {currentTest.map(item =>
                (<div>
                  <p style={{ textAlign: 'left' }}><Button label="Chat Bot:" className="p-button-rounded" /></p>
                  <Card key={item}>{item}</Card>
                  
                

                </div>))

              }
                {currentTime.map(item =>
                    (
                      <p style={{ textAlign: 'right' }}>{item}</p>
                    ))

                  }


            </Card>
            

          </Dialog>

          </div>
    );
  }
}

export default Dialogs;