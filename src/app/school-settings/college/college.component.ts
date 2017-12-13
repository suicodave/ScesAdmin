import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CollegeService } from '../../services/college.service';
import { College } from '../../interfaces/college';
import { MatDialog, MatSnackBar } from '@angular/material';
import { AddCollegeComponent } from '../../modals/add-college/add-college.component';
import { ShowCollegeComponent } from '../../modals/show-college/show-college.component';

@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrls: ['./college.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CollegeComponent implements OnInit {

  colleges: College[];
  deletedColleges: College[];
  constructor(private collegeService: CollegeService, private dialog: MatDialog, private snackBar: MatSnackBar) {


  }

  ngOnInit() {
    this.getColleges(4);
    this.getDeletedColleges(4);
  }


  getColleges(items?, orderBy?, orderValue?) {
    this.collegeService.getColleges(items, orderBy, orderValue)
      .subscribe(
      (res: any) => {
        this.colleges = res.data;

      },
      (er) => {
        console.log(er);


      }
      );
  }

  getDeletedColleges(items?, orderBy?, orderValue?) {
    this.collegeService.getDeletedColleges(items, orderBy, orderValue)
      .subscribe(
      (res: any) => {
        this.deletedColleges = res.data;

      },
      (er) => {
        console.log(er);


      }
      );
  }

  addCollege() {
    const dialogRef = this.dialog.open(AddCollegeComponent, {
      width: '450px'
    });

    const onRegisterCallBack = dialogRef.componentInstance.onCollegeRegistered
      .subscribe(
      () => {
        this.snackBar.open('College Sucessfully Registered', 'Okay', {
          duration: 3000
        });
        this.getColleges(4);
      }
      );

    const onRegisterFailed = dialogRef.componentInstance.onCollegeRegisterFail
      .subscribe(
      (res) => {
        // tslint:disable-next-line:forin
        for (const errorField in res) {

          for (const error of res[errorField]) {
            this.snackBar.open(error, 'okay', {
              duration: 5000
            });

          }

        }

      }
      );

  }

  showCollege(college: College) {

    const dialogRef = this.dialog.open(ShowCollegeComponent, {
      width: '450px',
      data: {
        college: college,
        showDeleted: false
      }
    });

    const updateSuccess = dialogRef.componentInstance.onUpdateSuccess
      .subscribe(
      (res) => {
        this.getColleges(4);
        this.snackBar.open(res.externalMessage, 'Okay', {
          duration: 10000

        });
      }
      );

    const updateFailure = dialogRef.componentInstance.onUpdateFailure
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

    const deletedSucess = dialogRef.componentInstance.onDeleteSuccess
      .subscribe(
      (res: any) => {
        this.snackBar.open(res.externalMessage, 'Okay', {
          duration: 3000
        });
        this.getColleges(4);
        this.getDeletedColleges(4);
      }
      );

    const deletedFailure = dialogRef.componentInstance.onDeleteFailure
      .subscribe(
      (err) => {
        console.log(err);

      }
      );


  }

  showDeletedCollege(college: College) {

    const dialogRef = this.dialog.open(ShowCollegeComponent, {
      width: '450px',
      data: {
        college: college,
        showDeleted: true
      }
    });



    const restoreSuccess = dialogRef.componentInstance.onRestoreSuccess
      .subscribe(
      (res) => {
        this.snackBar.open(res.externalMessage, 'Okay', {
          duration: 3000
        });
        this.getColleges(4);
        this.getDeletedColleges(4);

      }
      );

    const restoreFailure = dialogRef.componentInstance.onRestoreFailure
      .subscribe(
      (err) => {
        console.log(err);
        this.getDeletedColleges(4);

      }
      );
  }



}
