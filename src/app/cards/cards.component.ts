import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TrackByFunction,
} from '@angular/core';
import { IState } from '@app/app.module';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCards } from '../store';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardsComponent implements OnInit {
  @Input() cards!: number[] | null;

  @Output() deleteItem = new EventEmitter<number>();

  @Output() dropEvent = new EventEmitter<CdkDragDrop<number[]>>();

  trackByFn: TrackByFunction<number> = (index, item) => item;

  constructor() {}

  ngOnInit(): void {}

  onDelete(_elem: number) {
    this.deleteItem.emit(_elem);
  }

  drop(event: CdkDragDrop<number[]>) {
    console.log('prevuseIndex', event.previousIndex);
    console.log('currentIndex', event.currentIndex);
    this.dropEvent.emit(event);
  }
}
