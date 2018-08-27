import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgMousetrapModule } from 'ng-mousetrap';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, NgMousetrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
