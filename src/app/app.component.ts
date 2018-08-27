import { Component } from '@angular/core';
import { NgMousetrapService, Hotkey } from 'ng-mousetrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-space';
  constructor(private _hotkeysService: NgMousetrapService) {
    this._hotkeysService.add(new Hotkey('meta+shift+g', (event: KeyboardEvent): boolean => {
      console.log('Secret message');
      return false;
    }, undefined, 'Send a secret message to the console.'));

    this._hotkeysService.add(new Hotkey('esc', (event: KeyboardEvent): boolean => {
      this._hotkeysService.cheatSheetToggle.next(false);
      return false;
    }));
  }
}
