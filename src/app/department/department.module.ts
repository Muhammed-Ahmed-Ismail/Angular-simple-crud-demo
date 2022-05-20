import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentCrudComponent } from './department-crud/department-crud.component';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {DialogModule} from "primeng/dialog";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";



@NgModule({
  declarations: [
    DepartmentCrudComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule,
    DialogModule,
    InputTextModule,
    ButtonModule
  ],
  exports:[
    DepartmentCrudComponent
  ]
})
export class DepartmentModule { }
