import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// tslint:disable-next-line:max-line-length
import { MatCheckboxModule, MatSidenavModule, MatToolbarModule, MatListModule, MatButtonModule, MatCardModule, MatTooltipModule, MatProgressSpinnerModule, MatMenuModule, MatRippleModule, MatPaginatorModule, MatSlideToggleModule, MatInputModule, MatFormFieldModule } from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatRippleModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    MatInputModule,
    MatFormFieldModule
  ],
  declarations: [],
  exports: [
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatRippleModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    MatInputModule,
    MatFormFieldModule

  ]
})
export class MyMaterialModuleModule { }
