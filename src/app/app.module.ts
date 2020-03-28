import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxUserFormModule } from 'projects/ngx-user-form/src/lib/ngx-user-form.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxUserFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
