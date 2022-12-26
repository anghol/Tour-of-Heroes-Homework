import { Component } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent {

  // тип public, так как это будет привязано к шаблону
  constructor(public messageService: MessageService) {}
}
