import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  @Input() cards!: number[];

  @Output() deleteItem = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(_elem: number) {
    this.deleteItem.emit(_elem)
  }
}

