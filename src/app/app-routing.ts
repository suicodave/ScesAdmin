import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { SchoolSettingsComponent } from './school-settings/school-settings.component';
import { AdministratorsComponent } from './administrators/administrators.component';
import { IndexComponent } from './index/index.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'auth', component: AuthComponent

  },
  {
    path: '',
    component: IndexComponent,
    canActivateChild: [AuthGuard],
    children: [
      {
        path: '', redirectTo: 'home' , pathMatch: 'full'
      },
      {
        path: 'home', component: HomeComponent
      },
      {
        path: 'school_settings', component: SchoolSettingsComponent
      },
      {
        path: 'administrators', component: AdministratorsComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
