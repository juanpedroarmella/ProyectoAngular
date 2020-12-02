import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameShopContactComponent } from './gameshop-contact/gameshop-contact.component';
import { GameShopGamesComponent } from './gameshop-games/gameshop-games.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'games',
    pathMatch: 'full',
  },
  {
    path: 'games',
    component: GameShopGamesComponent,
  },
  {
    path: 'contacto',
    component: GameShopContactComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
