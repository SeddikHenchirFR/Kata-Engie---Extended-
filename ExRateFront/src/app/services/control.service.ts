import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ControlService {
  private readonly baseUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) {}

  startStreaming() {
    return this.http.get(`${this.baseUrl}/start`).toPromise();
  }

  stopStreaming() {
    return this.http.get(`${this.baseUrl}/stop`).toPromise();
  }
}
