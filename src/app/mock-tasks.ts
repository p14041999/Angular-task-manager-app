import {Task} from './task';

export const TASKS: Task[] = [
  { id: 1,
    name: 'Design Website',
    target: {day: 18, month: 'Apr', year: 2019},
    jobs: [
      {id: 1, text: 'Design Landing Page', completed: true},
      {id: 2, text: 'Design Product Page', completed: true},
      {id: 3, text: 'Design Category Page', completed: true},
      {id: 4, text: 'Design Cart Page', completed: true},
      {id: 5, text: 'Design Checkout Page', completed: true},
      {id: 6, text: 'Design Login Page', completed: true},
      {id: 7, text: 'Design Register Page', completed: true},
      {id: 8, text: 'Design Account Section Pages', completed: true},
      ]
  },
  { id: 2,
    name: 'Develop Website',
    target: {day: 27, month: 'Apr', year: 2019},
    jobs: [
      {id: 1, text: 'Develop Admin Panel', completed: true},
      {id: 2, text: 'Develop Product Page', completed: false},
      {id: 3, text: 'Develop Category Page', completed: false},
      {id: 4, text: 'Develop Cart Page', completed: false},
      {id: 5, text: 'Develop Checkout Page', completed: false},
      {id: 6, text: 'Rearrange Login Page', completed: false},
      {id: 7, text: 'Rearrange Register Page', completed: false},
      {id: 8, text: 'Develop User Account Section', completed: false},
    ]
  },
  { id: 3,
    name: 'Register Company',
    target: {day: 4, month: 'May', year: 2019},
    jobs: [
      {id: 1, text: 'Register Company', completed: true},
      {id: 2, text: 'Register Companies GSTIN', completed: false},
      {id: 3, text: 'Open Companies Bank A/C', completed: false},
    ]
  },
  { id: 4,
    name: 'Marketing & Sales',
    target: {day: 11, month: 'May', year: 2019},
    jobs: [
      {id: 1, text: 'Social Media Marketing on Facebook', completed: false},
      {id: 2, text: 'Sales Order Received will be Full Filled by Printrove DropShip', completed: false}
    ]
  }
];
