import React, { Component } from 'react';
import {Card} from 'primereact/card';
import {Menu} from 'primereact/menu';
import {Button} from 'primereact/button';
import axios from 'axios';


class TopProfile extends Component {

  constructor(props) {
    super(props);

    this.state = {
      items: [
        {
          items: [

            { label: 'Account', icon: 'pi pi-user' },
            { label: 'Settings', icon: 'pi pi-fw pi-cog' },
            { label: 'Sign Out', icon: 'pi pi-fw pi-power-off' }]
        }
      ],

      persons: [],
      users: [],
      isLoading: true,
      errors: null

    };
  }

  getUsers() {
    // We're using axios instead of Fetch
    axios
      // The API we're requesting data from
      .get("https://randomuser.me/api/")
      // Once we get a response, we'll map the API endpoints to our props
      .then(response =>
        response.data.results.map(user => ({
          name: `${user.name.first} ${user.name.last}`,
          username: `${user.login.username}`,
          email: `${user.email}`,
          image: `${user.picture.medium}`
        }))
      )
      // Let's make sure to change the loading state to display the data
      .then(users => {
        this.setState({
          users,
          isLoading: false
        });
      })
      // We can still use the `.catch()` method since axios is promise-based
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.getUsers();
  }


  render() {
    const { isLoading, users } = this.state;
    return (

      <div>
     
        <div>
          {!isLoading ? (
            users.map(user => {
              const { username, name, email, image } = user;
              return (
                <Card>
                  <Menu model={this.state.items} popup={true} ref={el => this.menu = el} id="popup_menu"/>
                  <div style={{ textAlign: 'center' }}>
                    <img src={image} />
                    <div className="p-col-12">
                      <Button className="p-button-raised p-button-secondary" style={{ backgroundColor: 'white', borderColor: 'white', fontSize: '1.5em', fontWeight: 'bold' }} label={name} icon="pi pi-fw pi-cog" iconPos="right" onClick={(event) => this.menu.toggle(event) } aria-controls="popup_menu" aria-haspopup={true}/>
                    </div>
                  </div>
                </Card>
              );
            })
          ) : (
              <p>Loading...</p>
            ) }
        </div>


      </div>
    );
  }
}

export default TopProfile;