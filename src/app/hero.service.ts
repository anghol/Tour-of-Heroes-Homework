import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  // сценарий service-in-service
  constructor(private messageService: MessageService) { }

  // getHeroes(): Hero[] {
  //   return HEROES;
  // }

  // используем Observable, после этого необходимо отредактировать HeroesComponent
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES); // возвращает Observable<Hero[]>, выдающий единственное значение - массив
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
}
