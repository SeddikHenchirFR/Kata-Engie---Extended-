import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card'; 
@Component({
  selector: 'app-rate-card',
  standalone: true,
  imports: [CommonModule, MatCardModule], 
  templateUrl: './rate-card.component.html',
  styleUrls: ['./rate-card.component.css'],
})
export class RateCardComponent {
  @Input() rate: { idRate: string; value: number; differenceMs?: number } | null = null;
}
