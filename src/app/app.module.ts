import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameListComponent } from './game-list/game-list.component';

import { FormsModule } from '@angular/forms';
import { GameShopContactComponent } from './gameshop-contact/gameshop-contact.component';
import { GameShopGamesComponent } from './gameshop-games/gameshop-games.component';
import { CartComponent } from './cart/cart.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    GameListComponent,
    GameShopContactComponent,
    GameShopGamesComponent,
    CartComponent,
    InputIntegerComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
