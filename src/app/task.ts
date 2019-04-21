import {Job} from './job';
class Date {
  day: number;
  month: string;
  year: number;
}
export class Task {
  id: number;
  name: string;
  target: Date;
  jobs: Job[];
}
