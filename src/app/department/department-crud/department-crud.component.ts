import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {Department} from "../../_models/department";
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-department-crud',
  templateUrl: './department-crud.component.html',
  styleUrls: ['./department-crud.component.css']
})

export class DepartmentCrudComponent  implements AfterViewInit  {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = ['id', 'name', 'loc','options'];

  departments:Department[]=[
    new Department(1,"ahh","sss"),
    new Department(1,"ahh","sss"),
    new Department(1,"ahh","sss"),
    new Department(1,"ahh","sss"),
    new Department(1,"ahh","sss"),
    new Department(1,"ahh","sss"),
    new Department(1,"ahh","sss"),
    new Department(1,"ahh","sss"),
    new Department(1,"ahh","sss"),
    new Department(1,"ahh","sss"),
    new Department(1,"ahh","sss"),
    new Department(1,"ahh","sss"),
    new Department(1,"ahh","sss"),
  ]
  dataSource = new MatTableDataSource<Department>(this.departments);
  constructor() {

  }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
