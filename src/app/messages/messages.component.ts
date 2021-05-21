import { Component, OnInit } from '@angular/core';
// Importamos el servicio de los mensajes
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  // Inyectamos la dependencia
  constructor(public messageService: MessageService) {}

  ngOnInit() {
  }

}
