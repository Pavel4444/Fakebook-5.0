import React, {Component} from 'react';
import {Carousel} from 'primereact/carousel';
import {Button} from 'primereact/button';
import {Card} from 'primereact/card';



class Carousels extends Component {

    constructor() {
        super();
        this.state = {
            cars: [

                {
                    brand: 'Mercedes',
                    year: '1994',
                    color: 'Blue',
                    odkaz: 'https://www.primefaces.org/primereact/showcase/resources/demo/images/car/Mercedes.png'
                },

                {
                    brand: 'Volvo',
                    year: '1994',
                    color: 'Blue',
                    odkaz: 'https://www.primefaces.org/primereact/showcase/resources/demo/images/car/Volvo.png'
                },

                {
                    brand: 'Honda',
                    year: '1994',
                    color: 'Blue',
                    odkaz: 'https://www.primefaces.org/primereact/showcase/resources/demo/images/car/Honda.png'
                }






            ]
        };


        this.carTemplate = this.carTemplate.bind(this);
    }


    carTemplate(car) {
        return (


            <div className="p-col-12">
                <div className="p-grid p-justify-center p-nogutter">
                    <img src={car.odkaz} alt={car.brand} />
                </div>

                <div className="p-col-12">
                    <div className="p-grid p-justify-center p-nogutter">
                        <div className="car-title"><h1>{car.brand}</h1></div>
                        <div className="car-subtitle">{car.year} | {car.color}</div>

                        <div className="car-buttons" style={{marginTop: '.95em'}}>
                            <Button icon="pi pi-search" className="p-button-secondary" style={{marginRight: '.25em'}} />
                            <Button icon="pi pi-star" className="p-button-secondary" style={{marginRight: '.25em'}} />
                            <Button icon="pi pi-cog" className="p-button-secondary" style={{marginRight: '.25em'}} />
                        </div>
                    </div>

                </div>
            </div>

        );
    }

 

    render() {

        

        return (
 <Card>
            <div>
           
                <Carousel value={this.state.cars} itemTemplate={this.carTemplate} numVisible={1} numScroll={1} className="custom-carousel"
                     circular={true} autoplayInterval={3000}></Carousel>
            
            </div>

 </Card>
        );
    }
}

export default Carousels;