import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Game } from './game-list/Game';


/**
 * Maneja la logica del carrito
 * 
 */

@Injectable({
  providedIn: 'root'
})

export class GameCartService {

  private _cartList: Game[] = [];

  cartList: BehaviorSubject<Game[]>= new BehaviorSubject([]);

  constructor() { }

  addToCart(game: Game) {
    let item: Game = this._cartList.find((v1) => v1.name == game.name);
    if (!item ){
      if(game.quantity>0){
        this._cartList.push({... game});
        
      }
    } else {
        item.quantity += game.quantity;
       
    }
    this.cartList.next(this._cartList); 
  }

  
}
