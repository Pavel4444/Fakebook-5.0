import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './component/Home/Home';
import Friends from './component/Friends/Friends';
import FriendInfo from './component/Home/FriendInfo';

class App3 extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="CovidApp" component={Home} exact/>
             <Route path="ChatApp" component={Home} exact/>
             <Route path="DataTable" component={Home} exact/>
             <Route path="/Friends" component={Friends} exact/>
             <Route path="/Friends/FriendInfo" component={FriendInfo} exact/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
export default App3;