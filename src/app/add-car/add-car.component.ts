import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {Car} from '../model/car';
import {UserService} from '../_services/user.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
  newCar: Car = new NewCar();
  car: Car;
  isNewCarAdded = false;

  constructor(private carService: UserService, private router: Router) {
  }

  @ViewChild('f', {static: false}) f: NgForm;

  ngOnInit() {
  }

  addCar(f: NgForm) {
    this.carService.addCar(this.newCar).subscribe((car) => {
        this.newCar.mark = ' ';
        this.newCar.model = ' ';
        this.newCar.imageName = ' ';
        this.newCar.color = ' ';
        this.newCar.dateOfProduction = '2020-08-01';
      },
      error => {
        console.log(error);
      });
    this.isNewCarAdded = true;
  }

  goToList() {
    this.router.navigate(['list-car']);
  }
}

class NewCar implements Car {
  constructor() {
  }
}


