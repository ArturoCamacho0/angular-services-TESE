import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

// Importamos la interfaz y los daotos
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
// Importamos el servicio de los mensajes
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {

  // Inyectamos la dependencia de los mensajes
  constructor(private messageService: MessageService) { }

  // Nos traemos los datos de los heroes y los devolvemos con un mensaje
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
}
