import { Component, OnInit } from '@angular/core';
import {Car} from '../model/car';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.css']
})
export class EditCarComponent implements OnInit {

  editCar: Car = new EditedCar();
  car: Car;
  isCarEdited = false;

  constructor(private carService: UserService, private router: Router) {
  }

  ngOnInit() {
  }

  modifyCar(form: NgForm) {
    this.carService.editCar(this.editCar).subscribe((car) => {
      this.car = car;
    });
    this.isCarEdited = true;
  }

  goToList() {
    this.router.navigate(['list-car']);
  }
}

class EditedCar implements Car {
  constructor() {
  }
}
