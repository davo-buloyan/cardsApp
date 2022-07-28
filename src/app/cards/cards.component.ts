import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, TrackByFunction } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardsComponent implements OnInit {

  @Input() cards!: number[];

  @Output() deleteItem = new EventEmitter<number>();

  trackByFn: TrackByFunction<number> = 
  (index, item) => item;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(_elem: number) {
    this.deleteItem.emit(_elem)
  }
}

