import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ProductModule} from "./product/product.module";
import {CoreModule} from "./core/core.module";
import {StudentModule} from "./student/student.module";
import {SharedModule} from "./shared/shared.module";
import {Department} from "./_models/department";
import {DepartmentModule} from "./department/department.module";
import {DepartmentCrudComponent} from "./department/department-crud/department-crud.component";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ProductModule,
    CoreModule,
    StudentModule,
    SharedModule,
    HttpClientModule,
    DepartmentModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
