import { Component, OnInit, Inject, EventEmitter } from '@angular/core';
import { MAT_DIALOG_DATA, MatCheckboxChange, MatSnackBar, MatDialogRef } from '@angular/material';
import { YearLevel } from '../../interfaces/year-level';
import { YearLevelService } from '../../services/year-level.service';
import { Department } from '../../interfaces/department';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-show-year-level',
  templateUrl: './show-year-level.component.html',
  styleUrls: ['./show-year-level.component.scss']
})
export class ShowYearLevelComponent implements OnInit {

  isEditMode = false;
  isDeleteMode = false;
  showDeleted: boolean;

  yearLevel: YearLevel;

  selectedDepartmentId;
  editName;
  nameMxLength;
  departments: Department[];

  onUpdateSuccess = new EventEmitter();
  onUpdateFailure = new EventEmitter();

  onDeleteSuccess = new EventEmitter();
  onDeleteFailure = new EventEmitter();

  onRestoreSuccess = new EventEmitter();
  onRestoreFailure = new EventEmitter();

  // tslint:disable-next-line:max-line-length
  constructor( @Inject(MAT_DIALOG_DATA) public data, private yearLevelService: YearLevelService, private snackBar: MatSnackBar, private dialog: MatDialogRef<ShowYearLevelComponent>) { }

  ngOnInit() {
    this.showDeleted = this.data.isDeleted;
    this.yearLevel = this.data.yearLevel;
    this.selectedDepartmentId = this.data.yearLevel.department.id;
    this.nameMxLength = this.yearLevelService.nameMxLength;

  }

  editMode(event: MatCheckboxChange) {
    this.isEditMode = event.checked;
    this.editName = this.yearLevel.name;
    this.getDepartments(4);
  }

  deleteMode(event: MatCheckboxChange) {
    this.isDeleteMode = event.checked;
  }

  getDepartments(items: number) {
    this.yearLevelService.getDepartments(items)
      .subscribe(
      (res: any) => {
        this.departments = res.data;
      }
      );
  }

  updateYearLevel(form: NgForm, name: string, departmentId: number, id) {
    if (!form.valid) {
      return false;
    }

    this.yearLevelService.updateYearLevel(name, departmentId, id)
      .subscribe(
      (res: any) => {
        this.onUpdateSuccess.emit(res);

      },
      (err: any) => {
        this.onUpdateFailure.emit(err);
      }
      );

    this.dialog.close();
  }

  deleteYearLevel(yearLevel: YearLevel) {

    this.yearLevelService.deleteYearLevels(yearLevel.id)
      .subscribe(
      (res) => {

        this.onDeleteSuccess.emit(res);
      },
      (err) => {

        this.onDeleteFailure.emit(err);
      }
      );
    this.dialog.close();

  }

  restoreYearLevel(yearLevel: YearLevel) {

    this.yearLevelService.restoreYearLevel(yearLevel.id)
      .subscribe(
      (res) => {
        this.onRestoreSuccess.emit(res);
      },
      (err) => {
        this.onRestoreFailure.emit(err);
      }

      );
    this.dialog.close();
  }


}
