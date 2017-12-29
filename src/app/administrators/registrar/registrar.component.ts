import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatPaginatorIntl, MatCheckboxChange, MatDialog, MatSnackBar } from '@angular/material';
import { RegistrarService } from '../../services/registrar.service';
import { Registrar } from '../../interfaces/registrar';
import { ShowRegistrarComponent } from '../../modals/show-registrar/show-registrar.component';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RegistrarComponent implements OnInit {
  itemsPerPageLabel;
  enableDeleted = false;

  registrars: Registrar[];
  deletedRegistrars: Registrar[];
  constructor(private asd: MatPaginatorIntl, private registrarService: RegistrarService, private dialog: MatDialog, private snackBar: MatSnackBar) {


  }

  ngOnInit() {
    this.getRegistrars();
    this.getDeletedRegistrars();
  }

  toggleShowDeleted(event: MatCheckboxChange) {

    return this.enableDeleted = event.checked;
  }

  getRegistrars(items = 15, orderBy?, orderValue?) {
    this.registrarService.getRegistrars(items, orderBy, orderValue)
      .subscribe(
      (res: any) => {
        this.registrars = res.data;
      }
      );
  }

  showRegistrar(registrar: Registrar) {
    const dialogRef = this.dialog.open(ShowRegistrarComponent, {
      width: '450px',
      data: {
        registrar: registrar
      }
    });

    const onDeactivateSuccess = dialogRef.componentInstance.onDeactivateSuccess
      .subscribe(
      (res) => {
        this.snackBar.open(res.externalMessage, 'Okay', {
          duration: 3000
        });
        this.getRegistrars(15);
        this.getDeletedRegistrars(15);
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

  showDeletedRegistrar(registrar: Registrar) {
    const dialogRef = this.dialog.open(ShowRegistrarComponent, {
      width: '450px',
      data: {
        registrar: registrar,
        isDeleted: true
      }
    });

    const onRestoreSuccess = dialogRef.componentInstance.onRestoreSuccess
      .subscribe(
      (res) => {
        this.snackBar.open(res.externalMessage, 'Okay', {
          duration: 3000
        });
        this.getRegistrars(15);
        this.getDeletedRegistrars(15);
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

  getDeletedRegistrars(items?, orderBy?, orderValue?) {
    this.registrarService.getDeletedRegistrars(items, orderBy, orderValue)
      .subscribe(
      (res: any) => {
        this.deletedRegistrars = res.data;
      }
      );
  }

  addRegistrar() {
    const dialogRef = this.dialog.open(ShowRegistrarComponent, {
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
        this.getRegistrars();
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
