import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Car} from '../model/car';

const httpOptions = {
  headers: new HttpHeaders({
    'Content_Type': 'application/json'
  })
};

const CAR_URL = 'https://design-car.herokuapp.com/api/cars';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getAllCar(): Observable<Array<Car>> {
    return this.http.get<Array<Car>>(CAR_URL, httpOptions);
  }

  getById(id: number): Observable<Car> {
    return this.http.get<Car>(`${CAR_URL}${id}`, httpOptions);
  }

  findByMark(mark: string): Observable<Car> {
    return this.http.get<Car>(`${CAR_URL}/mark/${mark}`, httpOptions);
  }

  addCar(car: Car): Observable<Car> {
    return this.http.post<Car>(`${CAR_URL}/add`, car, httpOptions);
  }

  editCar(car: Car): Observable<Car> {
    return this.http.put<Car>(`${CAR_URL}/edit/${car.id}`, car, httpOptions);
  }

  removeById(id: number): Observable<Car> {
    return this.http.delete(`${CAR_URL}/delete/${id}`, httpOptions);
  }
}
