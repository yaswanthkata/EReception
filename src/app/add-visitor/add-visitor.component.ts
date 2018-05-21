import {AfterViewInit, Component, Inject, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatSort, MatTableDataSource} from '@angular/material';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

import {Employee, Visitor} from '../models';
import {EmployeeService, VisitorsService} from '../services';

export class State {
  constructor(
      public name: string, public population: string, public flag: string) {}
}
@Component({
  selector: 'app-add-visitor',
  templateUrl: './add-visitor.component.html',
  styleUrls: ['./add-visitor.component.scss']
})
export class AddVisitorComponent implements OnInit {
  public purposes = [
    {value: 'interview', viewValue: 'Interview'},
    {value: 'admin', viewValue: 'Admin'}, {value: 'hr', viewValue: 'HR'},
    {value: 'it', viewValue: 'IT'}, {value: 'client', viewValue: 'Client'},
    {value: 'joining', viewValue: 'Joining'},
    {value: 'others', viewValue: 'Others'}
  ];
  public name: string;
  public mobile: number;
  public address: string;
  public email: string;
  public gender: string;
  public purpose: string;
  public contactPerson: string;

  public employeeCtrl: FormControl;
  public filteredEmployees: Observable<any[]>;
  public employees: Employee[];
  public options: FormGroup;

  constructor(
      private employeeService: EmployeeService,
      private visitorsService: VisitorsService,
      public dialogRef: MatDialogRef<AddVisitorComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any) {
    this.employeeCtrl = new FormControl();
    this.filteredEmployees = this.employeeCtrl.valueChanges.pipe(
        startWith(''),
        map(employee => employee ? this.filterEmployees(employee) :
                                   this.employees.slice()));
  }

  public ngOnInit() {
    this.employees = this.employeeService.getEmployees();
  }


  public onNoClick(): void {
    this.dialogRef.close();
  }


  public filterEmployees(name: string) {
    return this.employees.filter(
        employee =>
            employee.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  public addVisitor(): void {
    const visitor = new Visitor();
    visitor.name = this.name;
    visitor.email = this.email;
    visitor.mobile = this.mobile;
    visitor.address = this.address;
    visitor.purpose = this.purpose;
    visitor.gender = this.gender;
    visitor.inTime = new Date();
    visitor.toMeet = this.contactPerson;
    visitor.img_url =
        'assets/avatars/avatar_' + Math.floor(Math.random() * 8) + '.jpg';
    this.visitorsService.addVisitor(visitor);
  }
}
