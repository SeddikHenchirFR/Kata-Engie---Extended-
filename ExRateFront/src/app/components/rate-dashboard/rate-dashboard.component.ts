import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RateCardComponent } from '../rate-card/rate-card.component'; 
import { RateService } from '../../services/rate.service';
import { WebSocketService } from '../../services/websocket.service';
import { Observable } from 'rxjs';
import { Rate } from '../../models/rate.model';
@Component({
  selector: 'app-rate-dashboard',
  standalone: true,
  imports: [CommonModule, RateCardComponent], 
    templateUrl: './rate-dashboard.component.html',
  styleUrls: ['./rate-dashboard.component.css'],
})
export class RateDashboardComponent implements OnInit {
  rates$: Observable<{ [key: string]: Rate }>;

  constructor(private rateService: RateService, private wsService: WebSocketService) {
    this.rates$ = this.rateService.rates$;
  }

  ngOnInit() {}

  start() {
    this.wsService = new WebSocketService(this.rateService);
  }

  stop() {
    this.wsService.close();
  }
}
