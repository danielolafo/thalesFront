import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http : HttpClient) { }

  getEmployeeById(id:number): Observable<any>{
    return this.http.get(environment.employeeById+id);
  }

  getAllEmployees(): Observable<any>{
    return this.http.get(environment.allEmployees);
  }
}
