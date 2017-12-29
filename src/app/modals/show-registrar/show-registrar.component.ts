import { Component, OnInit, Inject, EventEmitter } from '@angular/core';
import { MAT_DIALOG_DATA, MatCheckboxChange, MatDialogRef } from '@angular/material';
import { Registrar } from '../../interfaces/registrar';
import { RegistrarService } from '../../services/registrar.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-show-registrar',
  templateUrl: './show-registrar.component.html',
  styleUrls: ['./show-registrar.component.scss']
})
export class ShowRegistrarComponent implements OnInit {

  isDeleted = false;
  isToAdd = false;
  registrar: Registrar;

  isDeleteMode = false;

  onDeactivateSuccess = new EventEmitter;
  onDeactivateFailure = new EventEmitter;

  onRestoreSuccess = new EventEmitter;
  onRestoreFailure = new EventEmitter;

  onRegisterSuccess = new EventEmitter;
  onRegisterFailure = new EventEmitter;

  fnameMxLength = 20;
  passwordMxLength = 15;


  // tslint:disable-next-line:max-line-length
  constructor( @Inject(MAT_DIALOG_DATA) private data, private registrarService: RegistrarService, private dialogRef: MatDialogRef<ShowRegistrarComponent>) { }

  ngOnInit() {
    if ('isDeleted' in this.data) {
      this.isDeleted = this.data.isDeleted;

    }
    if ('registrar' in this.data) {

      this.registrar = this.data.registrar;
    }
    if ('isToAdd' in this.data) {
      this.isToAdd = this.data.isToAdd;
    }
  }

  deleteMode(event: MatCheckboxChange) {
    this.isDeleteMode = event.checked;
  }

  deactivateRegistrar(registrar: Registrar) {
    this.registrarService.deleteRegistrar(registrar.id)
      .subscribe(
      (res: any) => {
        this.onDeactivateSuccess.emit(res);
      },
      (err) => {
        this.onDeactivateFailure.emit(err);
      }
      );


  }

  restoreRegistrar(registrar: Registrar) {
    this.registrarService.restoreRegistrar(registrar.id)
      .subscribe(
      (res: any) => {
        this.onRestoreSuccess.emit(res);
      },
      (err) => {
        this.onRestoreFailure.emit(err);
      }
      );
  }

  registerRegistrar(form: NgForm) {
    const firstname = form.value.first_name;
    const middlename = form.value.middle_name;
    const lastname = form.value.last_name;
    const email = form.value.email;
    const password = form.value.password;

    if (!form.valid) {
      return false;
    }

    this.registrarService.registerRegistrar(firstname, middlename, lastname, email, password)
      .subscribe(
      (res: any) => {
        this.onRegisterSuccess.emit(res);
      },
      (err) => {
        this.onRegisterFailure.emit(err);
      }
      );


    this.dialogRef.close();



  }


}
