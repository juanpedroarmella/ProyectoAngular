import { Component, OnInit } from '@angular/core';
import { GameCartService } from '../game-cart.service';
import { GameDataService } from '../game-data.service';
import { Game } from './Game';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss'],
})
export class GameListComponent implements OnInit {
  public games: Game[] = [];
  public isLoading: boolean = true;

  constructor(
    private cart: GameCartService,
    private gamesDataService: GameDataService
  ) {}

  ngOnInit(): void {
    this.gamesDataService.getAll().subscribe((games) => {
      this.games = games;
      this.isLoading = false;
    });
  }

  addToCart(game): void {
    this.cart.addToCart(game);
    game.stock -= game.quantity;
    game.quantity = 0;
  }

  maxReached(m: string) {
    alert(m);
  }
}
