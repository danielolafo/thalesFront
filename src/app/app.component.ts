import { Component } from '@angular/core';
import { EmployeeDao } from './model/Employee'; 
import { EmployeeService } from './service/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PruebaTecnicaFront';

  employeeList: EmployeeDao[]=[];

  searchId:any=null;

  constructor(private employeeService:EmployeeService){}

  search(){
    console.log('SearchId ',this.searchId);
    (this.searchId==null || this.searchId==undefined || this.searchId=="") ? this.searchAll(): this.searchById(this.searchId);
  }

  searchAll(){
    return this.employeeService.getAllEmployees().subscribe(res => {
      for(let emp of res){
        this.employeeList.push(emp);
      }
    });
  }

  searchById(id:number){
    return this.employeeService.getEmployeeById(id).subscribe(res => {
      this.employeeList=[];
      this.employeeList.push(res);
    });
  }
}
