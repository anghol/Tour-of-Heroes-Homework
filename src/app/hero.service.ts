import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  // getHeroes(): Hero[] {
  //   return HEROES;
  // }

  // используем Observable, после этого необходимо отредактировать HeroesComponent
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES); // возвращает Observable<Hero[]>, выдающий единственное значение - массив
    return heroes;
  }
}
