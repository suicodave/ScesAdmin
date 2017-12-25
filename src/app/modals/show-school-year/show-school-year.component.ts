import { Component, OnInit, Inject, EventEmitter, ViewChild, AfterContentChecked } from '@angular/core';
import { SchoolYear } from '../../interfaces/school-year';
import { MAT_DIALOG_DATA, MatDialogRef, MatCheckboxChange } from '@angular/material';
import { SchoolYearService } from '../../services/school-year.service';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { isNumber } from 'util';

@Component({
  selector: 'app-show-school-year',
  templateUrl: './show-school-year.component.html',
  styleUrls: ['./show-school-year.component.scss']
})
export class ShowSchoolYearComponent implements OnInit, AfterContentChecked {
  @ViewChild('nameLength') nameLength;

  schoolYear: SchoolYear;
  showDeleted = false;



  isEditMode = false;
  isDeleteMode = false;

  nameMxLength = this.schoolYearService.baseMxLength;


  onUpdateSuccess = new EventEmitter();
  onUpdateFailure = new EventEmitter();

  onDeleteSuccess = new EventEmitter();
  onDeleteFailure = new EventEmitter();

  onRestoreSuccess = new EventEmitter();
  onRestoreFailure = new EventEmitter();


  onActivateSchoolYearSuccess = new EventEmitter();

  editName: number;

  // tslint:disable-next-line:radix
  outputName: number;

  // tslint:disable-next-line:max-line-length
  constructor( @Inject(MAT_DIALOG_DATA) private data, private dialogRef: MatDialogRef<ShowSchoolYearComponent>, private schoolYearService: SchoolYearService) { }

  ngOnInit() {

    this.schoolYear = this.data.schoolYear;
    this.editName = this.schoolYear.base;
    ('isDeleted' in this.data) ? this.showDeleted = true : this.showDeleted = false;

  }


  ngAfterContentChecked() {
    if (this.nameLength != undefined) {

      this.outputName = Number(this.nameLength.nativeElement.value) + 1;
    }
  }

  editMode(event: MatCheckboxChange) {
    this.isEditMode = event.checked;

  }

  deleteMode(event: MatCheckboxChange) {
    this.isDeleteMode = event.checked;
  }

  updateSchoolYear(form: NgForm, base: number, id: number) {

    if (!form.valid) {
      return false;
    }

    this.schoolYearService.updateSchoolYear(base, this.schoolYear.id)
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

  deleteSchoolYear(schoolYear: SchoolYear) {
    this.schoolYearService.deleteSchoolYear(schoolYear.id)
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

  checkInput(event) {
    const key: any = parseInt(event.key);


    if (event.key == 'Enter') {
      return true;
    }

    if (isNaN(key)) {
      return false;
    }




  }



  restoreSchoolYear(schoolYear: SchoolYear) {

    this.schoolYearService.restoreSchoolYear(schoolYear.id)
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

  setActiveSchoolYear(schoolYear: SchoolYear) {
    this.schoolYearService.setActiveSchoolYear(schoolYear.id)
      .subscribe(
      (res) => {
        this.onActivateSchoolYearSuccess.emit(res);
      }
    );
    this.dialogRef.close();
  }

}
