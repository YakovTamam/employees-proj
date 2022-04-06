import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Employee } from 'src/app/employee';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.scss'],
})
export class EmployeeEditComponent implements OnInit {
  id: any;
  data: any;
  employee = new Employee();

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params;
    this.id = this.id.id;
    this.getData();
  }

  getData() {
    this.dataService.getEmployeeById(this.id).subscribe((res) => {
      this.data = res;
      this.employee = this.data.employee;
    });
  }

  updateEmployee() {
    this.dataService.updateData(this.id, this.employee).subscribe((res) => {});
  }
}
