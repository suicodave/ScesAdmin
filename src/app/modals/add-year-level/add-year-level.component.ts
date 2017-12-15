import { Component, OnInit, EventEmitter } from '@angular/core';
import { YearLevelService } from '../../services/year-level.service';
import { Department } from '../../interfaces/department';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-year-level',
  templateUrl: './add-year-level.component.html',
  styleUrls: ['./add-year-level.component.scss']
})
export class AddYearLevelComponent implements OnInit {

  departments: Department[];

  nameMxLength: number;

  onAddSuccess = new EventEmitter();
  onAddFailure = new EventEmitter();
  constructor(private yearLevelService: YearLevelService, private dialog: MatDialogRef<AddYearLevelComponent>) { }

  ngOnInit() {
    this.getDepartments(100);
    this.nameMxLength = this.yearLevelService.nameMxLength;
  }

  getDepartments(items: number) {
    this.yearLevelService.getDepartments(items)
      .subscribe(
      (res: any) => {
        this.departments = res.data;
      }
      );
  }

  addYearLevel(form: NgForm, name: string, departmentId: number) {

    if (!form.valid) {
      return false;
    }

    this.yearLevelService.addYearLevel(name, departmentId)
      .subscribe(
      (res) => {
        this.onAddSuccess.emit(res);

      },
      (err) => {
        this.onAddFailure.emit(err);
      }
      );

    this.dialog.close();

  }

}
