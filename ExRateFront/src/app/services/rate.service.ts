// src/app/services/rate.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Rate } from '../models/rate.model';

@Injectable({
  providedIn: 'root',
})
export class RateService {
  // Initialize the state with initial values for each rate
  private ratesSubject = new BehaviorSubject<{ [key: string]: Rate }>({
    'EURUSD': { idRate: 'EURUSD', value: 0, timestampGeneration: new Date(), differenceMs: 0 },
    'EURGBP': { idRate: 'EURGBP', value: 0, timestampGeneration: new Date(), differenceMs: 0 },
    'USDGBP': { idRate: 'USDGBP', value: 0, timestampGeneration: new Date(), differenceMs: 0 },
  });

  // Expose rates as an observable to be used by components
  rates$ = this.ratesSubject.asObservable();

  // Function to update the rate value
  updateRate(newRate: Rate): void {
    const currentRates = this.ratesSubject.value;
    currentRates[newRate.idRate] = {
      ...newRate,
      differenceMs: new Date().getTime() - new Date(newRate.timestampGeneration).getTime(),
    };
    this.ratesSubject.next(currentRates);
  }
}
