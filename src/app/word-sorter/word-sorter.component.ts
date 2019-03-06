import { Component, Input, OnInit } from '@angular/core';

import { VocabularyItem } from '../word-selector/word-selector.component';

@Component({
  selector: 'app-word-sorter',
  templateUrl: './word-sorter.component.html',
  styleUrls: ['./word-sorter.component.scss']
})
export class WordSorterComponent implements OnInit {
  @Input() trainingList: Array<VocabularyItem>;
  randomizedTranslations: Array<string>;
  errors: Array<VocabularyItem> = [];
  success = false;
  constructor() { }

  ngOnInit() {
    this.shuffle();
  }

  words(): Array<string> {
    return this.trainingList.map(item => item.word);
  }

  translations(): Array<string> {
    return this.trainingList.map(item => item.translation);
  }

  shuffle()  {
    this.randomizedTranslations = [...this.translations()];
    this.randomizedTranslations.sort(() => Math.random() - 0.5 );
  }

  checkCorrect() {
    this.errors = [];
    this.randomizedTranslations.forEach((translation: string, index: number) => {
      if (this.trainingList[index].translation !== translation) {
        this.errors.push(this.trainingList[index])
      }
    });
    this.success = this.errors.length === 0
    setTimeout(() => {
      this.errors = [];
      this.success = false;
    }, 6000);
  }


}
