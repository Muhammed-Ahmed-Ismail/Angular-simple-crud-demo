import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Department} from "../_models/department";

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private url: string;

  constructor(public http: HttpClient) {
    this.url = "http://localhost:8080/departments/"
  }

  getAllDepartments() {
    return this.http.get<Department[]>(this.url)
  }

  addDepartment(addedDepartment: Department) {
    return this.http.post<Department>(this.url, addedDepartment)
  }

  deleteDepartment(id:number)
  {
    return  this.http.delete(`${this.url+id}`)
  }

  getDepartmentById(id: number) {
    return this.http.get<Department>(`${this.url+id}`)
  }

  editDepartment(editedRecord: Department) {
   return  this.http.put<Department>(`${this.url+editedRecord._id}`,editedRecord)
  }
}
