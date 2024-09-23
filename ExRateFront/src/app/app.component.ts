// src/app/app.component.ts
import { Component } from '@angular/core';
import { AppStoreModule } from './store/store.module'; // Import the AppStoreModule
import { RateDashboardComponent } from './components/rate-dashboard/rate-dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    AppStoreModule, // Import the store module here to ensure the Store is provided
    RateDashboardComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'ExRateFront';
}
