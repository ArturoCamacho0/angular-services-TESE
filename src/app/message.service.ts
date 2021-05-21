import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];

  // Con esta función agregamos un mensaje
  add(message: string) {
    this.messages.push(message);
  }

  // Con esta borramos los mensajes
  clear() {
    this.messages = [];
  }
}
