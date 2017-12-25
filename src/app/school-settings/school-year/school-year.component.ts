import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SchoolYearService } from '../../services/school-year.service';
import { SchoolYear } from '../../interfaces/school-year';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ShowSchoolYearComponent } from '../../modals/show-school-year/show-school-year.component';
import { AddSchoolYearComponent } from '../../modals/add-school-year/add-school-year.component';

@Component({
  selector: 'app-school-year',
  templateUrl: './school-year.component.html',
  styleUrls: ['./school-year.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SchoolYearComponent implements OnInit {

  schoolYears: SchoolYear[];
  deletedSchoolYears: SchoolYear[];
  activeSchoolYear: SchoolYear;

  currentSchoolYearHasLoaded = false;

  constructor(private schoolYearService: SchoolYearService, private dialog: MatDialog, private snackBar: MatSnackBar) {

  }

  ngOnInit() {
    this.getActiveSchoolYear();
    this.getSchoolYears(4);
    this.getDeletedSchoolYears(4);


  }

  getSchoolYears(items?, orderBy?, orderValue?) {
    this.schoolYearService.getSchoolYears(items, orderBy, orderValue)
      .subscribe(
      (res: any) => {

        this.schoolYears = res.data;

      },
      (err) => {


      }
      );
  }

  getDeletedSchoolYears(items?, orderBy?, orderValue?) {
    this.schoolYearService.getDeletedSchoolYears(items, orderBy, orderValue)
      .subscribe(
      (res: any) => {

        this.deletedSchoolYears = res.data;

      },
      (err) => {


      }
      );
  }

  showSchoolYear(schoolYear: SchoolYear) {

    const dialogRef = this.dialog.open(ShowSchoolYearComponent, {
      width: '450px',
      data: {
        schoolYear: schoolYear
      }
    });


    const onUpdateSuccess = dialogRef.componentInstance.onUpdateSuccess
      .subscribe(
      (res) => {
        this.getSchoolYears(4);
        this.snackBar.open(res.externalMessage, 'Okay', {
          duration: 3000
        });

      }
      );

    const onUpdateFailure = dialogRef.componentInstance.onUpdateFailure
      .subscribe(
      (err) => {
        // tslint:disable-next-line:forin
        for (const errorField in err.error.errors) {

          for (const error of err.error.errors[errorField]) {
            this.snackBar.open(error, 'Okay', {
              duration: 5000
            });

          }

        }
      }
      );


    const onDeleteSuccess = dialogRef.componentInstance.onDeleteSuccess
      .subscribe(
      (res) => {
        this.getSchoolYears(4);
        this.getDeletedSchoolYears(4);
        this.snackBar.open(res.externalMessage, 'Okay', {
          duration: 3000
        });
      }
      );

    const onDeleteFailure = dialogRef.componentInstance.onDeleteFailure
      .subscribe(
      (err) => {
        // tslint:disable-next-line:forin
        for (const errorField in err.error.errors) {

          for (const error of err.error.errors[errorField]) {
            this.snackBar.open(error, 'Okay', {
              duration: 5000
            });

          }

        }
      }
      );
    const onActivateSchoolYearSuccess = dialogRef.componentInstance.onActivateSchoolYearSuccess
      .subscribe(
      (res) => {
        this.snackBar.open(res.externalMessage, 'Okay', {
          duration: 3000
        });
        this.getSchoolYears(4);
        this.getActiveSchoolYear();
      }
      );




  }

  showDeletedSchoolYear(schoolYear: SchoolYear) {
    const dialogRef = this.dialog.open(ShowSchoolYearComponent, {
      width: '450px',
      data: {
        schoolYear: schoolYear,
        isDeleted: true
      }
    });

    const onRestoreSuccess = dialogRef.componentInstance.onRestoreSuccess
      .subscribe(
      (res) => {
        this.snackBar.open(res.externalMessage, 'Okay', {
          duration: 3000

        });
        this.getSchoolYears(4);
        this.getDeletedSchoolYears(4);
      }
      );

    const onRestoreFailure = dialogRef.componentInstance.onRestoreFailure
      .subscribe(
      (err) => {
        // tslint:disable-next-line:forin
        for (const errorField in err.error.errors) {

          for (const error of err.error.errors[errorField]) {
            this.snackBar.open(error, 'Okay', {
              duration: 5000
            });

          }

        }
      }
      );

  }

  addSchoolYear() {
    const dialogRef = this.dialog.open(AddSchoolYearComponent, {
      width: '450px'
    });

    const onAddSuccess = dialogRef.componentInstance.onRegisterSuccess
      .subscribe(
      (res) => {
        this.snackBar.open(res.externalMessage, 'Okay', {
          duration: 3000
        });
        this.getSchoolYears(4);
      }
      );

    const onAddFailure = dialogRef.componentInstance.onRegisterFailure
      .subscribe(
      (err) => {
        // tslint:disable-next-line:forin
        for (const errorField in err.error.errors) {

          for (const error of err.error.errors[errorField]) {
            this.snackBar.open(error, 'Okay', {
              duration: 5000
            });

          }

        }
      }
      );
  }


  getActiveSchoolYear() {
    this.schoolYearService.getActiveSchoolYear().
      subscribe(
      (res: any) => {
        this.activeSchoolYear = res.data;
        this.currentSchoolYearHasLoaded = true;
      }
      );
  }

}
