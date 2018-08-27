import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { NgMousetrapService } from './ng-mousetrap.service';
import { Hotkey } from './ng-mousetrap.model';

@Component({
  selector: 'mousetrap-cheatsheet',
  styleUrls: ['ng-mousetrap.cheatsheet.component.css'],
  templateUrl: 'ng-mousetrap.cheatsheet.component.html',
})
export class NgMousetrapCheatsheetComponent implements OnInit, OnDestroy {
  helpVisible = false;
  @Input() title = 'Keyboard Shortcuts:';
  subscription: Subscription;

  leftSide: Hotkey[];
  rightSide: Hotkey[];

  constructor(private hotkeysService: NgMousetrapService) {
  }

  public ngOnInit(): void {
    this.subscription = this.hotkeysService.cheatSheetToggle.subscribe((isOpen) => {
      if (isOpen !== false) {
        const hotkeys = this.hotkeysService.hotkeys.filter(hotkey => hotkey.description);
        const half = Math.ceil(hotkeys.length / 2);
        this.leftSide = hotkeys.splice(0, half);
        this.rightSide = hotkeys;
      }

      if (isOpen === false) {
        this.helpVisible = false;
      } else {
        this.toggleCheatSheet();
      }
    });
  }

  public ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  public toggleCheatSheet(): void {
    this.helpVisible = !this.helpVisible;
  }
}
