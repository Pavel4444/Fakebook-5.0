import React, { Component } from 'react';
import { Client } from '@stomp/stompjs';
import logo from './logo.svg';
import {InputText} from 'primereact/inputtext';
import { Button } from 'primereact/button';
import {Dialog} from 'primereact/dialog';
import {Card} from 'primereact/card';
import './App.css';
import 'primereact/resources/themes/nova-light/theme.css';
import "primeflex/primeflex.css";
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

class App extends Component {

  state = {
    test: [],
    isLoggedIn: false,
    name: null,
    displayFooter: false,
    items: [],
    list: [],
    time: [],

  }

  componentDidMount() {
    console.log('Component did mount');
    // The compat mode syntax is totally different, converting to v5 syntax
    // Client is imported from '@stomp/stompjs'
    this.client = new Client();

    this.client.configure({
      brokerURL: 'ws://localhost:8080/gs-guide-websocket',
      onConnect: () => {
        console.log('Connected');

        this.client.subscribe('/topic/greetings', message => {
          this.setState({ test: [...this.state.test, JSON.parse(message.body).content] }); //JSON.parse(message.body).content
          this.setState({ time: [new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds()] });
          console.log(this.state.time);


        });
      },
    });
  }



  clickHandler = () => {

    if (this.state.isLoggedIn) {
      this.client.publish({ destination: '/app/hello', body: JSON.stringify({ 'msg': this.state.value, 'name': this.state.name }) }); //this.state.value //JSON.stringify({'name': this.state.value})
    }

    console.log('onConnect');

  }

  clickDisconnect = () => {
    this.setState({ isLoggedIn: false });
    this.client.deactivate();
  }

  sendUsername = () => {
    if (this.state.isLoggedIn) {
      this.client.publish({ destination: '/app/hello', body: JSON.stringify({ 'msg': this.state.value, 'name': this.state.value }) }); //this.state.value //JSON.stringify({'name': this.state.value})

    }
  }



  clickConnect = () => {

    this.client.activate();
    this.setState({ isLoggedIn: true })
    // this.sendUsername();
    // this.client.publish({ destination: '/app/hello', body: JSON.stringify({ 'msg': this.state.value, 'name': this.state.value}) });
    this.setState({ name: this.state.value });
  }

  renderFooter(name) {
    return (
      <div>
        <InputText placeholder="Enter your message" id="in" onChange={(e) => this.setState({ value: e.target.value }) } style={{ marginRight: '.25em' }}/>
        <Button className="p-button-secondary" onClick={this.clickHandler} label="Send" iconPos="right" style={{ marginRight: '.25em' }}/>
        <Button className="p-button-secondary" onClick={this.clickDisconnect} label="Disconnect" iconPos="right" style={{ marginRight: '.25em' }}/>
      </div>
    );
  }

  render() {
    return (


      <div className="p-grid p-align-center vertical-container">
        <div className="p-col" style={{ height: '500px' }}></div>
        <div className="p-col">
          <Card title="Simple Chat Bot App" style={{ textAlign: 'center' }}>

            <p>
              <InputText placeholder="Enter your username" id="in" onChange={(e) => this.setState({ value: e.target.value }) } style={{ marginRight: '.25em' }}/>
              <Button className="p-button-secondary" onClick={this.clickConnect} label="Connect" iconPos="right" style={{ marginRight: '.25em' }}/>
            </p>

          </Card>


          <Dialog header="Chat Room" visible={this.state.isLoggedIn} footer={this.renderFooter('displayFooter') } onShow={this.clickHandler} style={{ width: '50vw' }} closable={false}>
            <Card style={{ minHeight: '35vw', marginBottom: '.25em' }}>




              {this.state.test.map(item =>
                (<div>
                  <p style={{ textAlign: 'left' }}><Button label="Chat Bot:" className="p-button-rounded" /></p>
                  <Card key={item}>{item}</Card>
                  
                

                </div>))

              }
                {this.state.time.map(item =>
                    (
                      <p style={{ textAlign: 'right' }}>{item}</p>
                    ))

                  }




            </Card>

          </Dialog>





        </div>
        <div className="p-col"></div>
      </div>




    );
  }
}

export default App;