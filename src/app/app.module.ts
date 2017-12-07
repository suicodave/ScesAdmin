import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MyMaterialModuleModule } from './my-material-module';
import { FormsModule } from '@angular/forms';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { SchoolSettingsComponent } from './school-settings/school-settings.component';
import { AdministratorsComponent } from './administrators/administrators.component';
import { IndexComponent } from './index/index.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SchoolYearComponent } from './school-settings/school-year/school-year.component';
import { CollegeComponent } from './school-settings/college/college.component';



@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent,
    SchoolSettingsComponent,
    AdministratorsComponent,
    IndexComponent,
    SchoolYearComponent,
    CollegeComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyMaterialModuleModule,
    FormsModule,
    FlexLayoutModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
