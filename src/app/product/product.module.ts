import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import {SharedModule} from "../shared/shared.module";
import {CustomFilterPipe} from "../custom-filter.pipe";
import {FormsModule} from "@angular/forms";
import {ProductsFilterPipe} from "../products-filter.pipe";
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from "primeng/button";
import {CalendarModule} from "primeng/calendar";
import {RatingModule} from 'primeng/rating';

import {FileUploadModule} from 'primeng/fileupload';
import {HttpClientModule} from '@angular/common/http';
import {RippleModule} from "primeng/ripple";
import {DashReplacerPipe} from "../dash-replacer.pipe";





@NgModule({
  declarations: [
    ProductComponent,
    CustomFilterPipe,
    ProductsFilterPipe,
    DashReplacerPipe,

  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    TableModule,
    InputTextModule,
    DialogModule,
    ButtonModule,
    CalendarModule,
    RatingModule,
    FileUploadModule,
    HttpClientModule,
    RippleModule
  ],
  exports:[
    ProductComponent
  ]
})
export class ProductModule { }
