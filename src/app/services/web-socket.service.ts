// src/app/services/web-socket.service.ts
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private socket!: WebSocket;
  private messages$: Subject<any> = new Subject();

  constructor() {
    this.connect();
  }

  private connect(): void {
    this.socket = new WebSocket('ws://54.211.140.80/ws');

    this.socket.onopen = () => {
      console.log('Conectado al servidor');
      this.socket.send('Hello Server!');
    };

    this.socket.onmessage = (event) => {
      const message = JSON.parse(event.data);

      if (message.type === 'monitoring') {
        const data = JSON.parse(message.data);
        this.messages$.next(data);
      }
    };

    this.socket.onclose = () => {
      console.log('Desconectado del servidor');
    };
  }

  public getMessages(): Observable<any> {
    return this.messages$.asObservable();
  }
}
