import { Injectable } from '@angular/core';

import { Visitor } from '../models';


@Injectable()
export class VisitorsService {

    public getVisitors(): Visitor[] {
        ELEMENT_DATA.forEach(visitor => {
            const dateObj = new Date();
            visitor.inTime.setMinutes(dateObj.getMinutes() - Math.floor(Math.random() * 100));
        });
        return ELEMENT_DATA;
    }

    public addVisitor(visitor: Visitor): void {
        ELEMENT_DATA.unshift(visitor);
    }
}

const ELEMENT_DATA: Visitor[] = [
    {
        name: 'Swathi Karri', mobile: 9739143354, email: 'swathi.karri@gmail.com', purpose: 'interview', address: 'Jntu',
        toMeet: 'Nirmala', inTime: new Date(), outTime: null, emp_id: '1', img_url: 'assets/avatars/avatar_2.jpg', gender: 'Female'
    },
    {
        name: 'Sreekanth T', mobile: 9642643164, email: 'sreekanth.t@gmail.com', purpose: 'IT', address: 'kukatpally',
        toMeet: 'Raj', inTime: new Date(), outTime: null, emp_id: '1', img_url: 'assets/avatars/avatar_1.jpg', gender: 'Male'
    },
    {
        name: 'S Raghavendra', mobile: 8125722267, email: 'raghu_231@yahoo.com', purpose: 'Others', address: 'kukatpally',
        toMeet: 'Jyothi', inTime: new Date(), outTime: null, emp_id: '1', img_url: 'assets/avatars/avatar_3.jpg', gender: 'Male'
    },
    {
        name: 'Sudarshan Reddy', mobile: 7675778678, email: 'sudarsh_1@live.com', purpose: 'IT', address: 'kukatpally',
        toMeet: 'Srinivas', inTime: new Date(), outTime: null, emp_id: '1', img_url: 'assets/avatars/avatar_5.jpg', gender: 'Male'
    },
    {
        name: 'Sunitha N', mobile: 8008495980, email: 'sunitha.n@yahoo.com', purpose: 'Finance', address: 'kukatpally',
        toMeet: 'Venkat', inTime: new Date(), outTime: null, emp_id: '1', img_url: 'assets/avatars/avatar_4.jpg', gender: 'Female'
    },
    {
        name: 'Bhusan', mobile: 9008400946, email: 'bhusan123@gmail.com', purpose: 'HR', address: 'kukatpally',
        toMeet: 'Aparna', inTime: new Date(), outTime: null, emp_id: '1', img_url: 'assets/avatars/avatar_6.jpg', gender: 'Male'
    },
    {
        name: 'Prasanth K', mobile: 9959930676, email: 'prasanthk@gmail.com', purpose: 'Joining', address: 'kukatpally',
        toMeet: 'Kumari', inTime: new Date(), outTime: null, emp_id: '1', img_url: 'assets/avatars/avatar_7.jpg', gender: 'Male'
    },
    {
        name: 'Sravan K', mobile: 8019674135, email: 'sravan_k@gmail.com', purpose: 'Client', address: 'kukatpally',
        toMeet: 'Shiva', inTime: new Date(), outTime: null, emp_id: '1', img_url: 'assets/avatars/avatar_8.jpg', gender: 'Male'
    },
    {
        name: 'Sreekanth M', mobile: 9989786789, email: 'sreekanth_m@gmail.com', purpose: 'Guest', address: 'kukatpally',
        toMeet: 'Aparna', inTime: new Date(), outTime: null, emp_id: '1', img_url: 'assets/avatars/avatar_1.jpg', gender: 'Male'
    },
];

