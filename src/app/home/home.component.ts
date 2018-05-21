import { Component, OnInit, ViewChild, Inject, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatSort, MatDialog } from '@angular/material';
import { Employee, Visitor } from '../models';
import { VisitorsService, EmployeeService } from '../services';
import { AddVisitorComponent } from '../add-visitor/add-visitor.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

  public selectedRowIndex = -1;

  public selectedVisitor: Visitor;

  public displayedColumns = ['position', 'name', 'mobile', 'email', 'purpose', 'address', 'toMeet', 'inTime', 'outTime'];
  public dataSource: MatTableDataSource<Visitor>;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private visitorsService: VisitorsService, private employeeService: EmployeeService, public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource<Visitor>(this.visitorsService.getVisitors());
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  public applyFilter(filterValue: string): void {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  public addVisitor(): void {
    const dialogRef = this.dialog.open(AddVisitorComponent, {
      width: '450px',
      data: { name: '', animal: '' }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.dataSource = new MatTableDataSource<Visitor>(this.visitorsService.getVisitors());
      this.dataSource.sort = this.sort;
    });
  }

  public selectRow(row: Visitor, index: number) {
    this.selectedRowIndex = index;
    this.selectedVisitor = row;
  }

  public editVisitor(visitor: Visitor): void {
  }

  public deleteVisitor(visitor: Visitor): void {

  }
}
