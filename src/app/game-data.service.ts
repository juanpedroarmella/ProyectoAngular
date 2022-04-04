import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Game } from './game-list/Game';
const URL = 'https://624ae49b71e21eebbce8ec22.mockapi.io/api/v1/Games';
@Injectable({
  providedIn: 'root',
})
export class GameDataService {
  constructor(private http: HttpClient) {}

  /**
   * Consume la API de games y devuelve un observable a la respuesta.
   */

  public getAll(): Observable<Game[]> {
    //fetch ('url,{method:'GET})
    return this.http
      .get<Game[]>(URL)
      .pipe(
        tap((games: Game[]) => games.forEach((game) => (game.quantity = 0)))
      );
  }
}
