// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { rateReducer } from './store/rate.reducer'; 
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RateDashboardComponent } from './components/rate-dashboard/rate-dashboard.component';
import { RateCardComponent } from './components/rate-card/rate-card.component';
@NgModule({
  declarations: [
    AppComponent,
    RateDashboardComponent,
    RateCardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({ rateState: rateReducer }) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
