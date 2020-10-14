import React, {Component} from 'react';
import {FullCalendar} from 'primereact/fullcalendar';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';


class FullCalendars extends Component {


    constructor() {
        super();
        this.state = {
            events: [],
            options: {
                plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
                defaultView: 'dayGridMonth',
                defaultDate: '2017-02-01',
                header: {
                    left: 'prev,next',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay'
                },
                editable: true
            }
        };

    }




    render() {
        return (


            <div>
                <FullCalendar  events={this.state.events} options={this.state.options} />
            </div>


        );
    }
}

export default FullCalendars;