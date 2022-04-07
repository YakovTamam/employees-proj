import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { observable, map, startWith, Observable, NEVER } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { Employee } from 'src/app/employee';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private dataSercive: DataService) {}

  employeesNames: string[] = [];
  myControl = new FormControl();
  filteredOption: Observable<string[]> = NEVER;
  employees: any;

  ngOnInit(): void {
    this.getEmployees();
    this.filteredOption = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );
  }

  private _filter(value: string) {
    const filterValue = value.toLowerCase();
    return this.employeesNames.filter((employee) =>
      employee.toLowerCase().includes(filterValue)
    );
  }

  getEmployees() {
    this.dataSercive.getData().subscribe((res) => {
      this.employees = res;
      this.employees = this.employees.employee;
      this.mapData();
      console.log(this.employeesNames);
    });
  }

  mapData() {
    for (let index = 0; index < this.employees.length; index++) {
      this.employeesNames[index] = this.employees[index].name;
    }
  }
}
