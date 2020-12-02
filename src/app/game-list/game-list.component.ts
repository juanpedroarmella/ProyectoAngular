import { Component, OnInit } from '@angular/core';
import { GameCartService } from '../game-cart.service';
import { Game } from './Game';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

  games: Game[] = [
    {
      name:'Red Dead Redemption 2',
      type:'Rol/Aventura/Shooter/Mundo Abierto',
      platform:'PS5',
      price:70,        
      stock:8,
      image:'https://image.api.playstation.com/cdn/UP1004/CUSA03041_00/Hpl5MtwQgOVF9vJqlfui6SDB5Jl4oBSq.png',
      clearance: false,
      quantity: 0,
    },
    {
      name:'Halo Infinite',
      type:'Shooter',
      platform:'XBOX SERIES X/S',
      price:50,   
      stock:6,
      image:'https://media.vandal.net/m/82244/halo-infinite-202072216173826_2.jpg',
      clearance: true,
      quantity: 0,
    },
    {
      name:'God of War 4',
      type:'Rol/Aventura/Fantasía',
      platform:'PS4', 
      price:75,    
      stock:0,
      image:'https://i.3djuegos.com/juegos/11552/god_of_war_ps4__nombre_temporal_/fotos/ficha/god_of_war_ps4__nombre_temporal_-3754795.jpg',
      clearance:false,
      quantity: 0,
    },
    {
      name:'FIFA 21 Gold Edition',
      type:'Deportes/Fútbol',
      platform:'PC',
      price:90,        
      stock:1,
      image:'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2020/07/fifa-21-2005881.jpeg?itok=NzWompP5',
      clearance:false,
      quantity: 0,
    },
    {
      name:'The Witcher 3',
      type:'Rol/Fantasía/Acción',
      platform:'PC/PS4',
      price:30,        
      stock:3,
      image:'https://www.mundogamers.com/new/img/fichs/580/platforms/big/556d96f6-4058-4e80-9b68-633bb2217404.jpg',
      clearance:true,
      quantity: 0,
    },
  ];
 
  
  constructor(private cart: GameCartService) { 
  }

  ngOnInit(): void {
  }
  addToCart(game): void{
    this.cart.addToCart(game);
    game.stock -=game.quantity;
    game.quantity = 0; 
  }

  maxReached(m: string){
    alert(m);
  }

  

}
