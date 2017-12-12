import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { CollegeService } from '../../services/college.service';

@Component({
  selector: 'app-add-college',
  templateUrl: './add-college.component.html',
  styleUrls: ['./add-college.component.scss']
})
export class AddCollegeComponent implements OnInit {

  nameMxLength = 60;
  nameMnLength = 3;

  headMxLength = 20;
  headMnLength = 2;

  onCollegeRegistered = new EventEmitter();
  onCollegeRegisterFail = new EventEmitter();
  constructor(private dialogRef: MatDialogRef<AddCollegeComponent>, private collegeService: CollegeService) { }

  ngOnInit() {
  }

  addCollege(form: NgForm) {

    if (!form.valid) {
      return false;
    }

    this.collegeService.addCollege(form.value.colName, form.value.head)
      .subscribe(
      () => {
        this.onCollegeRegistered.emit();
        this.dialogRef.close();
      },
      (err) => {
        this.dialogRef.close();
        this.onCollegeRegisterFail.emit(err.error.errors);


      }
      );


  }

}
