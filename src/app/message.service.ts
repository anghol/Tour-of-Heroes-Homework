import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

// внедряется в HeroService, HeroesComponent, MessageComponent
export class MessageService {

  // кэш сообщений
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }

  constructor() { }
}
