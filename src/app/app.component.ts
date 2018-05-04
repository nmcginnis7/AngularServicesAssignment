import {Component} from '@angular/core';
import {CounterService} from './Services/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];
  countMovedToInactive: number;
  countMovedToActive: number;

  constructor(private counterService: CounterService) {}

}
