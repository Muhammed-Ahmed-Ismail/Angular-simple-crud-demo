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
  displayEditModal: boolean = false;
  addedDepartment: Department = new Department();
  editedRecord: Department=new Department();


  constructor(public departmentService: DepartmentService) {
  }

  ngOnInit(): void {
    this.updateList()
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  add(idField: any, nameField: any, locationField: any) {
    this.addedDepartment = new Department(idField.value, nameField.value, locationField.value)
    this.departmentService.addDepartment(this.addedDepartment)
      .subscribe({
        next: (department) => {
          this.updateList()
          this.addedDepartment = new Department()
          this.displayAddModal = false
        }
      })
  }

  updateList() {
    this.departmentService.getAllDepartments().subscribe({
      next: (departments) => {
        this.departments = departments
        this.dataSource = new MatTableDataSource<Department>(this.departments);
        this.dataSource.paginator = this.paginator;
      }
    })
  }

  showAddModalDialog() {
    this.displayAddModal = true;
  }
  showEditModalDialog() {
    this.displayEditModal = true;
  }

  delete(_id: number) {
    this.departmentService.deleteDepartment(_id).subscribe({
        complete: () => {
          this.updateList()
        }
      }
    )
  }


  save() {
    this.departmentService.editDepartment(this.editedRecord).subscribe({
      complete:()=>{
        this.updateList()
      }
    })
    this.displayEditModal=false
  }

  edit(_id: number) {
    this.departmentService.getDepartmentById(_id).subscribe(
      {
        next:(department)=>{
          this.editedRecord=department
          this.showEditModalDialog()
        }
      }
    )
  }
}
