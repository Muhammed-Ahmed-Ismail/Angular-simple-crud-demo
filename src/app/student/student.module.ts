import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddStudentComponent } from './add-student/add-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { DeleteStudentComponent } from './delete-student/delete-student.component';
import { ListStudentComponent } from './list-student/list-student.component';
import {DialogModule} from "primeng/dialog";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";
import {RippleModule} from "primeng/ripple";
import { StudentCrudComponent } from './student-crud/student-crud.component';



@NgModule({
  declarations: [
    AddStudentComponent,
    EditStudentComponent,
    DeleteStudentComponent,
    ListStudentComponent,
    StudentCrudComponent
  ],
  imports: [
    CommonModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    RippleModule
  ],
  exports: [
   StudentCrudComponent
  ]
})
export class StudentModule { }
