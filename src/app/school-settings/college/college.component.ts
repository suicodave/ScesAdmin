import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CollegeService } from '../../services/college.service';
import { College } from '../../interfaces/college';
import { MatDialog, MatSnackBar } from '@angular/material';
import { AddCollegeComponent } from '../../modals/add-college/add-college.component';

@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrls: ['./college.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CollegeComponent implements OnInit {

  colleges: College[];
  constructor(private collegeService: CollegeService, private dialog: MatDialog, private snackBar: MatSnackBar) {

    this.getColleges(4);
  }

  ngOnInit() {
  }


  getColleges(items?, orderBy?, orderValue?) {
    this.collegeService.getColleges(items, orderBy, orderValue)
      .subscribe(
      (res) => {
        this.colleges = res.data;

      },
      (er) => {
        console.log(er);


      }
      );
  }

  addCollege() {
    const dialogRef = this.dialog.open(AddCollegeComponent {
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
        for (const error of res.name) {
          this.snackBar.open(error, 'okay', {
            duration: 2000
          });

        }
      }
      );

  }

}
