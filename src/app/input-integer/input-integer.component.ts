import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Game } from '../game-list/Game';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss'],
})
export class InputIntegerComponent implements OnInit {
  constructor() {}

  @Input()
  quantity: number;

  @Input()
  max: number;

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  maxReached: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {}

  upQuantity(): void {
    if (this.quantity < this.max) {
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    } else
      this.maxReached.emit('Se alcanzó el maximo de elementos para comprar');
  }
  downQuantity(): void {
    if (this.quantity > 0) {
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }

  changeQuantity(value: string): void {
    const parsedValue = parseInt(value);
    if (isNaN(parsedValue) || parsedValue > this.max) {
      this.quantity = 0;
    } else {
      this.quantity = parsedValue;
    }
    this.quantityChange.emit(this.quantity);
  }
}
