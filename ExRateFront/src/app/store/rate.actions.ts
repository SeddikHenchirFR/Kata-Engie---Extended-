import { createAction, props } from '@ngrx/store';
import { Rate } from '../models/rate.model';

export const addRate = createAction(
  '[Rate] Add Rate',
  props<{ rate: Rate }>()
);
