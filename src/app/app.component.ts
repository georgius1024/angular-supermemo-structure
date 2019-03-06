import { Component } from '@angular/core';
import { VocabularyItem } from './word-selector/word-selector.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'supermemo';
  options: any;
  trainingList: Array<VocabularyItem> = []
  wordsSelected(list: Array<VocabularyItem>) {
    this.trainingList = list;
  }
}
