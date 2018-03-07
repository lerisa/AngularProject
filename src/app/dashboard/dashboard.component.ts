import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  employees: Employee[] = [];

  constructor(private employeeservice: EmployeeService) {

  }


  ngOnInit() {

    this.getEmployees();
  }




  getEmployees(): void {
    this.employeeservice.getEmployees().subscribe(employees => this.employees = employees.slice(1, 5));
  }
}

