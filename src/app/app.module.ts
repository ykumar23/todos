import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpListComponent } from './components/emp-list/emp-list.component';
import { EmpDetailsComponent } from './components/emp-details/emp-details.component';
import { EmpContainerComponent } from './components/emp-container/emp-container.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpListComponent,
    EmpDetailsComponent,
    EmpContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
