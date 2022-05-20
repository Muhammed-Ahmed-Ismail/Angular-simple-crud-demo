import { Injectable } from '@angular/core';
import {Student} from "./_models/student";
import {find, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  public studentsList:Student[]=[]
  private url:string
  constructor(public httpClient:HttpClient) {
    this.url="http://localhost:8080/students/"
  }

  add(student:Student)
  {
   return  this.httpClient.post<Student>(this.url,student)
  }

  delete(id:number)
  {
  /*  this.studentsList.splice(this.studentsList.findIndex(student=>{
      return student._id===id
    }),1)*/
    return this.httpClient.delete<Student>(`${this.url+id}`)
  }

  edit(editedStudent:Student)
  {
    // this.studentsList.splice(this.studentsList.findIndex(student=>{
    //   return student._id===editedStudent._id
    // }),1,editedStudent)
   return this.httpClient.put<Student>(`${this.url+editedStudent._id}`,editedStudent)
  }
  getStudentById(id:number):Observable<Student> | undefined
  {/*
    return this.studentsList.find(student=>{
      return student._id===id*/
    return this.httpClient.get<Student>(`http://localhost:8080/students/${id}`)

  }
  getAllStudents()
  {
    return this.httpClient.get<Student[]>("http://localhost:8080/students")
  }
  provideList()
  {
    this.getAllStudents().subscribe({
      next:(data)=>{
        console.log(data)
        this.studentsList=data;
        console.log(this.studentsList)
      }
    })

  }
}
