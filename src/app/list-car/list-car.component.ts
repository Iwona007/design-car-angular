import { Component, OnInit } from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {Car} from '../model/car';

@Component({
  selector: 'app-list-car',
  templateUrl: './list-car.component.html',
  styleUrls: ['./list-car.component.css']
})
export class ListCarComponent implements OnInit {
  cars: Array<Car>;
  canDeleteCar = false;
  car: Car;
  roles: string[] = [];
  isCarDeleted = false;

  constructor(private carService: UserService, private tokenStorageService: TokenStorageService) {
  }

  ngOnInit() {
    this.getAll();
    this.initialisePermission();
  }

  getAll() {
    this.carService.getAllCar().subscribe((cars) => {
      this.cars = cars;
      console.log(cars);
    });
  }

  initialisePermission() {
    const user = this.tokenStorageService.getUser();
    this.roles = this.tokenStorageService.getUser().roles;
    if (this.roles.includes('ROLE_ADMIN')) {
      this.canDeleteCar = true;
    }
  }

  deleteCarById(id: number) {
    this.carService.removeById(id).subscribe((car) => {
      this.car = car;
      console.log();
    });
    this.canDeleteCar = true;
    this.isCarDeleted = true;
  }

  refresh() {
    this.carService.getAllCar().subscribe(car => {
        this.cars = car;
      },
      (error: HttpErrorResponse) => {
        console.log(error.status);
      });
  }
}
