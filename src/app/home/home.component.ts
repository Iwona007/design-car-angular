import { Component, OnInit } from '@angular/core';
import {Car} from '../model/car';
import {UserService} from '../_services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cars: Array<Car>;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.getCars();
  }

  getCars() {
    this.userService.getAllCar().subscribe(data => {
      this.cars = data;
    });
  }
}

