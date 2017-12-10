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
import { RootUserComponent } from './administrators/root-user/root-user.component';
import { RegistrarComponent } from './administrators/registrar/registrar.component';
import { ComelecComponent } from './administrators/comelec/comelec.component';
import { YearLevelComponent } from './school-settings/year-level/year-level.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';


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
    RootUserComponent,
    RegistrarComponent,
    ComelecComponent,
    YearLevelComponent,
    
    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyMaterialModuleModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    

    

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
