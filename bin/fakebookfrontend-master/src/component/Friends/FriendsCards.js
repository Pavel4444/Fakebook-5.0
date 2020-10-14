import React, { Component } from 'react';
import {Card} from 'primereact/card';
import {Menu} from 'primereact/menu';
import {Button} from 'primereact/button';
import { NavLink } from 'react-router-dom';
import axios from 'axios';


class FriendsCards extends Component {

  constructor() {
    super();

    this.state = {
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
      .get("https://randomuser.me/api/?results=6")
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
                <Card style={{ marginBottom: '0.5em' }}>   
                  <div style={{ textAlign: 'Center' }}>
                     <img src={image}/>   
                    <div className="p-col-12">
                      <NavLink to="/Friends/FriendInfo"><Button className="p-button-raised p-button-secondary" style={{ backgroundColor: 'white', borderColor: 'white', fontSize: '1.5em', fontWeight: 'bold' }} label={name}/></NavLink>
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

export default FriendsCards;