import React, { Component } from 'react';
import {Card} from 'primereact/card';
import {Button} from 'primereact/button';
import {Messages} from 'primereact/messages';
import {Message} from 'primereact/message';
import Cards2 from './Cards2';
import axios from 'axios';

class Cards extends Component {

    constructor(props) {
        super(props);
        this.state = {
            persons: [],
            showMessage: false,
            isLoading: true,
            clicked: false,
            errors: null
        };
        
        this.showSuccess = this.showSuccess.bind(this);
    }


    getUsers() {
        // We're using axios instead of Fetch
        axios
            // The API we're requesting data from
            .get("https://randomuser.me/api/?results=1")
            // Once we get a response, we'll map the API endpoints to our props
            .then(response =>
                response.data.results.map(user => ({
                    name: `${user.name.first} ${user.name.last}`,
                    username: `${user.login.username}`,
                    email: `${user.email}`,
                    image: `${user.picture.large}`
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

      showSuccess(bool) {

        this.setState({showMessage: true });
        this.setState({clicked: true });
        this.messages.show({ severity: 'success', summary: 'Success', detail: 'Feed Loaded' });
        
    }

    componentDidMount() {
        this.getUsers();
    }

    



  render() {

      const { isLoading, users } = this.state;


        const footer = (
            <span>
                <Button label="Like" icon="pi pi-thumbs-up" className="p-button-raised" style={{marginRight: '.25em'}}/>
                <Button label="Comment" icon="pi pi-comment" className="p-button-raised" style={{marginRight: '.25em'}}/>
                <Button label="Share" icon="pi pi-share-alt" className="p-button-raised"/>
               
            </span>
        );

        return (


            <div>

                {!isLoading ? (
                    users.map(user => {


                        const { username, name, email, image } = user;
                        const header = (<img alt="Card" src=''/>);
                        return (

                            <div>


                                <Card title={name} subTitle="Subtitle" className="ui-card-shadow" footer={footer} header={<img alt="Card" src={image}/>}>
                                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Inventore sed consequuntur error repudiandae numquam deserunt
                                        quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</div>
                                </Card>
                                <br/>

                                <Messages ref={(el) => this.messages = el} />
                                {this.state.showMessage && (
                                    <div>
                                     
                                        <Cards2 />
                                        
                                    </div>
                                    
                                ) }
                                

                            </div>
                    
                        );
                    })
                ) : (
                        <p>Loading...</p>
                    ) }


                <div style={{ textAlign: 'center' }}>


                    {this.state.clicked ? (<div></div>) : (<Button label="Load more" onClick={this.showSuccess}/>) }

                </div>

                

            </div>

          

        );
    }
}

export default Cards;