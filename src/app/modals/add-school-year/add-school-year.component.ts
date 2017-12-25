import { Component, OnInit, AfterContentChecked, ViewChild, EventEmitter } from '@angular/core';
import { SchoolYearService } from '../../services/school-year.service';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-school-year',
  templateUrl: './add-school-year.component.html',
  styleUrls: ['./add-school-year.component.scss']
})
export class AddSchoolYearComponent implements OnInit, AfterContentChecked {
  @ViewChild('nameLength') nameLength;

  outputName;
  editName;
  nameMxLength;

  onRegisterSuccess = new EventEmitter();
  onRegisterFailure = new EventEmitter();
  constructor(private schoolYearService: SchoolYearService, private dialog: MatDialogRef<AddSchoolYearComponent>) { }

  ngOnInit() {
    this.nameMxLength = this.schoolYearService.baseMxLength;
  }



  ngAfterContentChecked() {
    if (this.nameLength != undefined) {
      this.outputName = Number(this.nameLength.nativeElement.value) + 1;
    }


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


  addSchoolYear(form: NgForm, base: number) {
    if (!form.valid) {
      return false;
    }
    this.schoolYearService.addSchoolYear(base)
      .subscribe(
      (res) => {
        this.onRegisterSuccess.emit(res);
      },
      (err) => {
        this.onRegisterFailure.emit(err);
      }
      );

    this.dialog.close();
  }

}
