import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';


import {EmployeeModule} from './employee/employee.module';
import { RouterModule } from '@angular/router';

import { NavComponent } from './Shared/nav/nav.component';
import { appRoutes } from './routes';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent
   

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    
    EmployeeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
