import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../employee';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private httpClient: HttpClient) {}

  getData() {
    return this.httpClient.get('http://127.0.0.1:8000/api/employee');
  }

  insertData(data: Employee) {
    return this.httpClient.post('http://127.0.0.1:8000/api/employee/', data);
  }

  deleteData(id: any) {
    return this.httpClient.delete(`http://127.0.0.1:8000/api/employee/${id}`);
  }

  getEmployeeById(id: any) {
    return this.httpClient.get(`http://127.0.0.1:8000/api/employee/${id}`);
  }

  updateData(id: any, data: any) {
    return this.httpClient.put(
      `http://127.0.0.1:8000/api/employee/` + id,
      data
    );
  }
}
