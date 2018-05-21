import { Component, OnChanges, Input } from '@angular/core';
import { Employee, Visitor } from '../models';
import { VisitorsService, EmployeeService } from '../services';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.scss']
})
export class EmployeeCardComponent implements OnChanges {

  @Input()
  public visitor: Visitor;

  public selectedEmployee: Employee;

  constructor(private employeeService: EmployeeService, public snackBar: MatSnackBar) { }

  ngOnChanges() {
    const employee = this.employeeService.getEmployee(this.visitor.emp_id);
    this.selectedEmployee = employee;
  }
  public logOut(): void {
    this.visitor.outTime = new Date();
  }

  public openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
