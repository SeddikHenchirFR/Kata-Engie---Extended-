// src/app/store/store.module.ts
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { rateReducer } from './rate.reducer'; // Import your reducer here

@NgModule({
  imports: [StoreModule.forRoot({ rateState: rateReducer })], // Configure your StoreModule
  exports: [StoreModule] // Export the StoreModule so it can be used in other parts of the app
})
export class AppStoreModule {}
