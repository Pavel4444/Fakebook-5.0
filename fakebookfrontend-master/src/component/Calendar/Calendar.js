import React, {Component} from 'react';
import {Calendar} from 'primereact/calendar'


class Calendars extends Component {

    constructor() {
        super();

        let today = new Date();
        let month = today.getMonth();
        let year = today.getFullYear();
        let prevMonth = (month === 0) ? 11 : month - 1;
        let prevYear = (prevMonth === 11) ? year - 1 : year;
        let nextMonth = (month === 11) ? 0 : month + 1;
        let nextYear = (nextMonth === 0) ? year + 1 : year;

        let minDate = new Date();
        minDate.setMonth(prevMonth);
        minDate.setFullYear(prevYear);
        let maxDate = new Date();
        maxDate.setMonth(nextMonth);
        maxDate.setFullYear(nextYear);

        this.state = {
            date1: null,
            date2: null,
            date3: null,
            date4: null,
            date5: null,
            date6: null,
            date7: null,
            date8: null,
            date9: null,
            date10: null,
            date11: null,
            date12: null,
            date13: null,
            dates1: null,
            dates2: null,
            minDate: minDate,
            maxDate: maxDate,
            invalidDates: [today]
        };

        this.dateTemplate = this.dateTemplate.bind(this);
    }

    dateTemplate(date) {
        if (date.day > 10 && date.day < 15) {
            return (
                <div style={{backgroundColor: '#1dcbb3', color: '#ffffff', fontWeight: 'bold', borderRadius: '50%', width: '2em', height: '2em', lineHeight: '2em', padding: 0}}>{date.day}</div>
            );
        }
        else {
            return date.day;
        }
    }

  render() {
           const es = {
            firstDayOfWeek: 1,
            dayNames: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
            dayNamesShort: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
            dayNamesMin: ["D", "L", "M", "X", "J", "V", "S"],
            monthNames: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
            monthNamesShort: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"]
        };

    return (

      
      <div className="p-col-12">
        <Calendar value={this.state.date14} onChange={(e) => this.setState({date14: e.value})} inline={true} showWeek={true} />
      </div>
      

    );
  }
}

export default Calendars;