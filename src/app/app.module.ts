import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import {CoreModule} from './core/core.module';
import {EmployeeModule} from './employee/employee.module';
import { RouterModule } from '../../node_modules/@angular/router';
import {appRoutes} from './routes';



@NgModule({
  declarations: [
    AppComponent
   

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    CoreModule,
    EmployeeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
