import { Component, OnInit } from '@angular/core';

// Imporamos la interfaz de los heroes
import { Hero } from '../hero';
// Importamos los servicios
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero?: Hero;

  heroes: Hero[] = [];

  // Inyectamos las dependencias para utilizar los servicios
  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    // Agregamos el mensaje usando el servicio
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  // Traemos a los heroes con suscribe
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
}
