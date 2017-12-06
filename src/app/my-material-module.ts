import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule, MatSidenavModule } from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatSidenavModule
  ],
  declarations: [],
  exports: [
    MatCheckboxModule,
    MatSidenavModule
  ]
})
export class MyMaterialModuleModule { }
