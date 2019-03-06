import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { SortablejsModule } from 'angular-sortablejs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WordSelectorComponent } from './word-selector/word-selector.component';
import { WordSorterComponent } from './word-sorter/word-sorter.component';

@NgModule({
  declarations: [
    AppComponent,
    WordSelectorComponent,
    WordSorterComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    SortablejsModule.forRoot({ animation: 150 }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
