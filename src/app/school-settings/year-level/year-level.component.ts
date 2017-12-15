import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { YearLevelService } from '../../services/year-level.service';
import { YearLevel } from '../../interfaces/year-level';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ShowYearLevelComponent } from '../../modals/show-year-level/show-year-level.component';
import { AddYearLevelComponent } from '../../modals/add-year-level/add-year-level.component';

@Component({
  selector: 'app-year-level',
  templateUrl: './year-level.component.html',
  styleUrls: ['./year-level.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class YearLevelComponent implements OnInit {

  yearLevels: YearLevel[];

  deletedYearLevels: YearLevel[];

  constructor(private yearLevelService: YearLevelService, private dialog: MatDialog, private snackBar: MatSnackBar) { }


  ngOnInit() {
    this.getYearLevels(4);
    this.getDeletedYearLevels(4);

  }


  getYearLevels(items: number): void {

    this.yearLevelService.getYearLevels(4)
      .subscribe(
      (res: any) => {
        this.yearLevels = res.data;
      }
      );

  }

  showYearLevel(yearLevel: YearLevel) {

    const dialogRef = this.dialog.open(ShowYearLevelComponent, {
      width: '450px',
      data: {
        yearLevel: yearLevel,
        isDeleted: false
      }
    });

    const updateSuccess = dialogRef.componentInstance.onUpdateSuccess
      .subscribe(
      (res) => {
        this.snackBar.open(res.externalMessage, 'Okay', {
          duration: 5000
        });
        this.getYearLevels(4);
      }
      );

    const updateFailure = dialogRef.componentInstance.onUpdateFailure
      .subscribe(
      (err) => {
        // tslint:disable-next-line:forin
        for (const errorField in err.error.errors) {
          for (const error of err.error.errors[errorField]) {
            this.snackBar.open(error, 'Okay', {
              duration: 3000
            });
          }
        }
      }
      );


    const deleteSucess = dialogRef.componentInstance.onDeleteSuccess
      .subscribe(
      (res) => {
        this.snackBar.open(res.externalMessage, 'Okay', {
          duration: 5000
        });
        this.getYearLevels(4);
        this.getDeletedYearLevels(4);

      }
      );


    const deleteFailure = dialogRef.componentInstance.onDeleteFailure
      .subscribe(
      (err) => {
        // tslint:disable-next-line:forin
        console.log(err);

      }
      );



  }

  getDeletedYearLevels(items: number): void {

    this.yearLevelService.getDeletedYearLevels(4)
      .subscribe(
      (res: any) => {
        this.deletedYearLevels = res.data;
      }
      );

  }

  showDeletedYearLevel(yearLevel: YearLevel) {

    const dialogRef = this.dialog.open(ShowYearLevelComponent, {
      width: '450px',
      data: {
        yearLevel: yearLevel,
        isDeleted: true
      }
    });



    const restoreSuccess = dialogRef.componentInstance.onRestoreSuccess
      .subscribe(
      (res) => {
        this.snackBar.open(res.externalMessage, 'Okay', {
          duration: 3000
        });
        this.getYearLevels(4);
        this.getDeletedYearLevels(4);

      }
      );

    const restoreFailure = dialogRef.componentInstance.onRestoreFailure
      .subscribe(
      (err) => {
        console.log(err);
        this.getDeletedYearLevels(4);

      }
      );
  }

  addYearLevel() {

    const dialogRef = this.dialog.open(AddYearLevelComponent, {
      width: '450px'
    });

    const onAddSucess = dialogRef.componentInstance.onAddSuccess
      .subscribe(
      (res) => {
        this.snackBar.open(res.externalMessage, 'Okay', {
          duration: 3000
        });

        this.getYearLevels(4);
      }
      );

    const onAddFailure = dialogRef.componentInstance.onAddFailure
      .subscribe(
      (err) => {
        // tslint:disable-next-line:forin
        for (const errorField in err.error.errors) {

          for (const error of err.error.errors[errorField]) {
            this.snackBar.open(error, 'okay', {
              duration: 5000
            });

          }

        }
      }
      );
  }
}
