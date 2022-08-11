import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IState } from './app.module';
import { selectCards } from './store';
import {
  addCard,
  deleteCard,
  moveCard,
  sortCards,
} from './store/cards/cards.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  cards$ = this.store.select(selectCards);

  constructor(private store: Store<IState>) {}

  onAddCard() {
    this.store.dispatch(addCard({ cardId: Math.round(Math.random() * 100) }));
  }

  onDelete(cardNum: number) {
    this.store.dispatch(deleteCard({ cardId: cardNum }));
  }

  onSort() {
    this.store.dispatch(sortCards());
  }

  moveItem(event: CdkDragDrop<number[]>) {
    this.store.dispatch(
      moveCard({
        prevuseIndex: event.previousIndex,
        currentIndex: event.currentIndex,
      })
    );
  }
}
