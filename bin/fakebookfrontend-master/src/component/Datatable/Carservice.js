import axios from 'axios';

export class CarService {

    getCarsSmall() {
        return axios.get('/api/employees')
                .then(res => res.data.data);
    }


}