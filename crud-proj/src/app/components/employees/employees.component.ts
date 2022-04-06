import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/employee';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent implements OnInit {
  employees: any;
  employee = new Employee();

  constructor(private dataSercive: DataService) {}

  ngOnInit(): void {
    this.getEmployeesData();
  }

  getEmployeesData() {
    this.dataSercive.getData().subscribe((res) => {
      this.employees = res;
      this.employees = this.employees.employee;
    });
  }

  insertEmployee() {
    this.dataSercive.insertData(this.employee).subscribe((res) => {
      this.getEmployeesData();
    });
  }

  deleteEmployee(employeeId: any) {
    this.dataSercive.deleteData(employeeId).subscribe((res) => {
      this.getEmployeesData();
    });
  }
}
