import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@environments/environment.development';
import { GyphyResponse } from '../interfaces/giphy.interface';

@Injectable({ providedIn: 'root' })
export class GifService {
  private http = inject(HttpClient);
  constructor() {
    this.loadTrendingGifs();
  }
  loadTrendingGifs() {
    this.http.get<GyphyResponse>(`${environment.giphyUrl}/gifs/trending`, {
      params: {
        api_key: environment.giphyApyKey,
        limit: 20,
      },
    });
  }
}
