import { Component, OnInit, EventEmitter, Inject } from '@angular/core';
import { Registrar as Comelec } from '../../interfaces/registrar';
import { MAT_DIALOG_DATA, MatDialogRef, MatCheckboxChange } from '@angular/material';
import { ComelecService } from '../../services/comelec.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-show-comelec',
  templateUrl: './show-comelec.component.html',
  styleUrls: ['./show-comelec.component.scss']
})
export class ShowComelecComponent implements OnInit {

  isDeleted = false;
  isToAdd = false;
  comelec: Comelec;

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
  constructor( @Inject(MAT_DIALOG_DATA) private data, private comelecService: ComelecService, private dialogRef: MatDialogRef<ShowComelecComponent>) { }

  ngOnInit() {
    if ('isDeleted' in this.data) {
      this.isDeleted = this.data.isDeleted;

    }
    if ('comelec' in this.data) {

      this.comelec = this.data.comelec;
    }
    if ('isToAdd' in this.data) {
      this.isToAdd = this.data.isToAdd;
    }
  }

  deleteMode(event: MatCheckboxChange) {
    this.isDeleteMode = event.checked;
  }

  deactivateComelec(comelec: Comelec) {
    this.comelecService.deleteComelec(comelec.id)
      .subscribe(
      (res: any) => {
        this.onDeactivateSuccess.emit(res);
      },
      (err) => {
        this.onDeactivateFailure.emit(err);
      }
      );


  }

  restoreComelec(comelec: Comelec) {
    this.comelecService.restoreComelec(comelec.id)
      .subscribe(
      (res: any) => {
        this.onRestoreSuccess.emit(res);
      },
      (err) => {
        this.onRestoreFailure.emit(err);
      }
      );
  }

  registerComelec(form: NgForm) {
    const firstname = form.value.first_name;
    const middlename = form.value.middle_name;
    const lastname = form.value.last_name;
    const email = form.value.email;
    const password = form.value.password;

    if (!form.valid) {
      return false;
    }

    this.comelecService.registerComelec(firstname, middlename, lastname, email, password)
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
