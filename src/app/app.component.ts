import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Car} from './model/car';
import {TokenStorageService} from './_services/token-storage.service';
import {UserService} from './_services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'design-car-angular';
  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showUserBoard = false;
  showCars: Observable<Array<Car>>;
  username: string;
  car: Car;

  constructor(private tokenStorageService: TokenStorageService, private userService: UserService) {
  }

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showUserBoard = this.roles.includes('ROLE_USER');
      this.username = user.username;
      this.showCars = this.userService.getAllCar();
    }
  }

  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}

