import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {Department} from "../../_models/department";
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {DepartmentService} from "../../_services/department.service";

@Component({
  selector: 'app-department-crud',
  templateUrl: './department-crud.component.html',
  styleUrls: ['./department-crud.component.css']
})

export class DepartmentCrudComponent implements AfterViewInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = ['_id', 'name', 'location', 'options'];
  departments: Department[] = []
  dataSource = new MatTableDataSource<Department>(this.departments);
  displayAddModal: boolean = false

  addedDepartment: Department = new Department();

  constructor(public departmentService: DepartmentService) {
  }

  ngOnInit(): void {
    this.departmentService.getAllDepartments().subscribe({
      next: (data) => {
        this.departments = data
        this.dataSource = new MatTableDataSource<Department>(this.departments);
        this.dataSource.paginator = this.paginator;
        console.log(data)
      }
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  add(idField: any, nameField: any, locationField: any) {
    this.addedDepartment = new Department(idField.value, nameField.value, locationField.value)
    this.departmentService.addDepartment(this.addedDepartment)
      .subscribe({
        next: (department) => {
          this.departmentService.getAllDepartments().subscribe({
            next: (departments) => {
              this.departments = departments
              this.dataSource = new MatTableDataSource<Department>(this.departments);
              this.dataSource.paginator = this.paginator;
            }
          })
          this.addedDepartment=new Department()
          this.displayAddModal=false
        }
      })
  }

  addDepartment() {

  }

  showModalDialog() {
    this.displayAddModal = true;
  }
}
