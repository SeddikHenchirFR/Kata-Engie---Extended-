import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
global.WebSocket = require('ws');
import { RateService } from './rate.service';
import { Rate } from '../models/rate.model';
import {environment} from '../../environements/environment'

@Injectable({
  providedIn: 'root',
})
export class WebSocketService {
  private socket$: WebSocketSubject<any> | undefined;

  constructor(private rateService: RateService) {
    this.connectWebSocket();
  }

  private connectWebSocket() {
    this.socket$ = webSocket('ws://localhost:5000/ws');

    debugger;
    this.socket$.subscribe({
      next: (data: any) => {
        const rate: Rate = {
          idRate: data.IdRate,
          value: data.Value,
          timestampGeneration: new Date(data.TimestampGeneration),
        };
        this.rateService.updateRate(rate);
      },
      
      error: (err) => console.error('WebSocket error:', err),
      complete: () => console.log('WebSocket connection closed'),
    });
  }

  reconnect() {
    this.connectWebSocket();
  }

  close() {
    this.socket$?.complete();
    //stop the streaming
    webSocket('ws://localhost:5000/close').subscribe();
  }
}
