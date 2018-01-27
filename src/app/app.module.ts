import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { AllEmpResComponent } from './all-emp-res/all-emp-res.component';
import { empModule} from './emp.module';
import { SingleEmpResComponent } from './single-emp-res/single-emp-res.component';

@NgModule({
  declarations: [
    AppComponent,
    AllEmpResComponent,
    SingleEmpResComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    empModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
