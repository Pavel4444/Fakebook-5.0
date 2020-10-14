import React, { Component } from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {Dialog} from 'primereact/dialog';
import {CarService} from './Carservice';

class DataTableSelectionDemo extends Component {

    constructor() {
        super();
        this.state = {
       cars: [
                {vin: 'Pivp00', year: '1988', brand: '1'},
                {vin: 'Kal02', year: '1994', brand: '2'}    
            ],

        };
        this.carservice = new CarService();
    }


    displaySelection(data) {
        if(!data || data.length === 0) {
            return <div style={{textAlign: 'left'}}>No Selection</div>;
        }
        else {
            if(data instanceof Array)
                return <ul style={{textAlign: 'left', margin: 0}}>{data.map((car,i) => <li>}>{car.vin + ' - ' + car.year + ' - ' + car.brand + ' - ' + car.color}</li>)}</ul>;
            else
                return <div style={{textAlign: 'left'}}>Selected Car: {data.vin + ' - ' + data.year + ' - ' + data.brand}</div>
        }
    }

    render() {
    
        return (
            
            <div>           
                    <DataTable value={this.state.cars} selectionMode="single" header="Single Selection" footer={this.displaySelection(this.state.selectedCar1)}
                        selection={this.state.selectedCar1} onSelectionChange={e => this.setState({selectedCar1: e.value})} onRowDoubleClick={(e) => this.setState({visible: true})} >
                        <Column field="vin" header="Vin" />
                        <Column field="year" header="Year" />
                   </DataTable>


                        <Dialog header="Table Details" visible={this.state.visible} style={{ width: '50vw' }} modal={true} onHide={() => this.setState({ visible: false }) }>
                    <div>{this.displaySelection(this.state.selectedCar1)}</div>
                </Dialog>
                

            </div>
        );
        
    }
}
export default DataTableSelectionDemo;