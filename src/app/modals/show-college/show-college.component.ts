import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatCheckboxChange, MatDialogRef } from '@angular/material';
import { College } from '../../interfaces/college';
import { CollegeService } from '../../services/college.service';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-show-college',
  templateUrl: './show-college.component.html',
  styleUrls: ['./show-college.component.scss']
})
export class ShowCollegeComponent implements OnInit {

  isEditMode = false;
  isDeleteMode = false;

  nameMxLength = this.collegeService.nameMxLength;
  nameMnLength = this.collegeService.nameMnLength;

  headMxLength = this.collegeService.headMxLength;
  headMnLength = this.collegeService.headMnLength;

  editName: string;
  editHead: string;

  onUpdateSuccess = new EventEmitter();
  onUpdateFailure = new EventEmitter();

  onDeleteSuccess = new EventEmitter();
  onDeleteFailure = new EventEmitter();

  onRestoreSuccess = new EventEmitter();
  onRestoreFailure = new EventEmitter();

  college: College;
  showDeleted = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private collegeService: CollegeService,
    private dialogRef: MatDialogRef<ShowCollegeComponent>) {

  }

  ngOnInit() {
    this.college = this.data.college;
    this.showDeleted = this.data.showDeleted;

    this.editName = this.college.name;
    this.editHead = this.college.head;
  }

  editMode(event: MatCheckboxChange) {
    this.isEditMode = event.checked;
  }

  deleteMode(event: MatCheckboxChange) {
    this.isDeleteMode = event.checked;
  }

  updateCollege(form: NgForm, colName: string, colHead: string, id: number) {

    if (!form.valid) {
      return false;
    }
    this.collegeService.updateCollege(colName, colHead, id)
      .subscribe(
      (res: any) => {
        this.onUpdateSuccess.emit(res);
      },
      (err) => {
        this.onUpdateFailure.emit(err);
      }
      );
    this.dialogRef.close();
  }

  deleteCollege(college: College) {
    this.collegeService.deleteCollege(college.id)
      .subscribe(
      (res) => {

        this.onDeleteSuccess.emit(res);
      },
      (err) => {
        this.onDeleteFailure.emit(err);
      }
      );

    this.dialogRef.close();

  }

  restoreCollege(college: College) {

    this.collegeService.restoreCollege(college.id)
      .subscribe(
      (res) => {
        this.onRestoreSuccess.emit(res);
      },
      (err) => {
        this.onRestoreFailure.emit(err);
      }

      );
    this.dialogRef.close();
  }

}
