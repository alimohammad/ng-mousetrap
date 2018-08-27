import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgMousetrapModule } from 'ng-mousetrap';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, NgMousetrapModule.forRoot({ cheatSheetCloseEsc: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
