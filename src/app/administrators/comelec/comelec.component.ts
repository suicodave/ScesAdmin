import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Registrar as Comelec } from '../../interfaces/registrar';
import { MatSnackBar, MatDialog } from '@angular/material';
import { ComelecService } from '../../services/comelec.service';
import { ShowComelecComponent } from '../../modals/show-comelec/show-comelec.component';

@Component({
  selector: 'app-comelec',
  templateUrl: './comelec.component.html',
  styleUrls: ['./comelec.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ComelecComponent implements OnInit {
  enableDeleted = false;

  comelecs: Comelec[];
  deletedComelecs: Comelec[];
  constructor(private snackBar: MatSnackBar, private dialog: MatDialog, private comelecService: ComelecService) { }

  ngOnInit() {
    this.getComelecs();
    this.getDeletedComelecs();
  }

  toggleShowDeleted() {


    return (this.enableDeleted == false) ? this.enableDeleted = true : this.enableDeleted = false;
  }

  getComelecs(items = 15, orderBy?, orderValue?) {
    this.comelecService.getComelecs(items, orderBy, orderValue)
      .subscribe(
      (res: any) => {
        this.comelecs = res.data;
      }
      );
  }

  getDeletedComelecs(items = 15, orderBy?, orderValue?) {
    this.comelecService.getDeletedComelecs(items, orderBy, orderValue)
      .subscribe(
      (res: any) => {
        this.deletedComelecs = res.data;
      }
      );
  }

  showComelec(comelec: Comelec) {
    const dialogRef = this.dialog.open(ShowComelecComponent, {
      width: '450px',
      data: {
        comelec: comelec
      }
    });

    const onDeactivateSuccess = dialogRef.componentInstance.onDeactivateSuccess
      .subscribe(
      (res) => {
        this.snackBar.open(res.externalMessage, 'Okay', {
          duration: 3000
        });
        this.getComelecs(15);
        this.getDeletedComelecs(15);
      }
      );

    const onDeactivateFailure = dialogRef.componentInstance.onDeactivateFailure
      .subscribe(
      (res) => {
        if ('externalMessage' in res) {
          this.snackBar.open(res.externalMessage, 'Okay', {
            duration: 3000
          });
        }

      }
      );
  }

  showDeletedComelec(comelec: Comelec) {
    const dialogRef = this.dialog.open(ShowComelecComponent, {
      width: '450px',
      data: {
        comelec: comelec,
        isDeleted: true
      }
    });

    const onRestoreSuccess = dialogRef.componentInstance.onRestoreSuccess
      .subscribe(
      (res) => {
        this.snackBar.open(res.externalMessage, 'Okay', {
          duration: 3000
        });
        this.getComelecs(15);
        this.getDeletedComelecs(15);
      }
      );

    const onRestoreFailure = dialogRef.componentInstance.onRestoreFailure
      .subscribe(
      (res) => {
        if ('externalMessage' in res) {
          this.snackBar.open(res.externalMessage, 'Okay', {
            duration: 3000
          });
        }

      }
      );
  }

  addComelec() {
    const dialogRef = this.dialog.open(ShowComelecComponent, {
      width: '450px',
      data: {
        isToAdd: true
      }
    });

    const onRegisterSucessful = dialogRef.componentInstance.onRegisterSuccess
      .subscribe(
      (res: any) => {
        this.snackBar.open(res.externalMessage, 'Okay', {
          duration: 3000
        });
        this.getComelecs();
      }
      );

    const onRegisterFaulre = dialogRef.componentInstance.onRegisterFailure
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

}
