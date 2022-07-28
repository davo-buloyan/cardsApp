import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cards: number[] = [];

  onAddCard() {
    this.cards.push(Math.round(Math.random() * 100))
    console.log(this.cards);
  }

  onDelete(_elem: any) {
    this.cards = this.cards.filter(ind => ind != _elem)
  }

  onSort() {
    this.cards.sort((a,b) => a-b)
  }
}
