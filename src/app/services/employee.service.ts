import { Injectable } from '@angular/core';

import { Employee } from '../models';


@Injectable()
export class EmployeeService {

    public getEmployees(): Employee[] {
        return ELEMENT_DATA;
    }

    public getEmployee(emp_id: string): Employee {
        return ELEMENT_DATA.find(emp => emp.emp_id === emp_id);
    }
}

const ELEMENT_DATA: Employee[] = [
    {
        position: 1, name: ' Yaswanth Kata', email: 'yash.k@comakeit.com', mobile: 9739143354, emp_id: '1',
        img_url: 'assets/avatars/avatar_5.jpg'
    },
    {
        position: 2, name: ' Sesham Raju', email: 'yash.k@comakeit.com', mobile: 9739143354, emp_id: '2',
        img_url: 'assets/avatars/avatar_1.jpg'
    },
    {
        position: 3, name: ' Gopi Krishna', email: 'yash.k@comakeit.com', mobile: 9739143354, emp_id: '3',
        img_url: 'assets/avatars/avatar_3.jpg'
    },
    {
        position: 4, name: ' Bala Krishna', email: 'yash.k@comakeit.com', mobile: 9739143354, emp_id: '4',
        img_url: 'assets/avatars/avatar_6.jpg'
    },
    {
        position: 5, name: ' Hiren Sagar', email: 'yash.k@comakeit.com', mobile: 9739143354, emp_id: '5',
        img_url: 'assets/avatars/avatar_7.jpg'
    },
    {
        position: 6, name: ' Indra Kothare', email: 'yash.k@comakeit.com', mobile: 9739143354, emp_id: '6',
        img_url: 'assets/avatars/avatar_8.jpg'
    },
];
