import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgMousetrapDirective } from './ng-mousetrap.directive';
import { NgMousetrapCheatsheetComponent } from './ng-mousetrap.cheatsheet.component';
import { INgMousetrapOptions, NgMousetrapOptions } from './ng-mousetrap.options';
import { NgMousetrapService } from './ng-mousetrap.service';

@NgModule({
  imports: [CommonModule
  ],
  declarations: [NgMousetrapDirective, NgMousetrapCheatsheetComponent],
  exports: [NgMousetrapDirective, NgMousetrapCheatsheetComponent]
})
export class NgMousetrapModule {
  static forRoot(options: INgMousetrapOptions = {}): ModuleWithProviders {
    return {
      ngModule: NgMousetrapModule,
      providers: [
        NgMousetrapService,
        { provide: NgMousetrapOptions, useValue: options }
      ]
    };
  }
}
