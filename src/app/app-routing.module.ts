import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StudentCrudComponent} from "./student/student-crud/student-crud.component";
import {ProductComponent} from "./product/product/product.component";
import {DepartmentCrudComponent} from "./department/department-crud/department-crud.component";

const routes: Routes = [
  {path:"students",component:StudentCrudComponent},
  {path:"products",component:ProductComponent},
  {path:"departments",component:DepartmentCrudComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
