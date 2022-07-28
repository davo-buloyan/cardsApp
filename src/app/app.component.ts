import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cards: number[] = [];

  onAddCard() {
    this.cards = [ ...this.cards, Math.round(Math.random() * 100) ];
  }

  onDelete(cardNum: number) {
    this.cards = this.cards.filter((_cardNum) => _cardNum != cardNum);
  }

  onSort() {
    this.cards =  [...this.cards].sort((a,b) => a - b);
  }
}
