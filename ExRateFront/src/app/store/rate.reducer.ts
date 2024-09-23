import { createReducer, on } from '@ngrx/store';
import { addRate } from './rate.actions';
import { Rate } from '../models/rate.model';

export interface RateState {
  rates: { [key: string]: Rate };
}

export const initialState: RateState = {
  rates: {
    'EURUSD': { idRate: 'EURUSD', value: 0, timestampGeneration: new Date(), differenceMs: 0 },
    'EURGBP': { idRate: 'EURGBP', value: 0, timestampGeneration: new Date(), differenceMs: 0 },
    'USDGBP': { idRate: 'USDGBP', value: 0, timestampGeneration: new Date(), differenceMs: 0 },
  }
};

export const rateReducer = createReducer(
  initialState,
  on(addRate, (state, { rate }) => ({
    ...state,
    rates: {
      ...state.rates,
      [rate.idRate]: {
        ...state.rates[rate.idRate],
        value: rate.value,
        timestampGeneration: rate.timestampGeneration,
        differenceMs: new Date().getTime() - new Date(rate.timestampGeneration).getTime(),
      },
    },
  }))
);
