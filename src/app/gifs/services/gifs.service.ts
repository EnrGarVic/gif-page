import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment.development';
import { GyphyResponse } from '../interfaces/giphy.interface';
import { Gif } from '../interfaces/gif.interface';
import { GifMapper } from '../mapper/gif.mapper';

@Injectable({ providedIn: 'root' })
export class GifService {
  private http = inject(HttpClient);

  trendingGif = signal<Gif[]>([]);

  trendingGifsLoading = signal(true);

  constructor() {
    this.loadTrendingGifs();
  }
  loadTrendingGifs() {
    this.http
      .get<GyphyResponse>(`${environment.giphyUrl}/gifs/trending`, {
        params: {
          api_key: environment.giphyApyKey,
          limit: 20,
        },
      })
      .subscribe((resp) => {
        const gifs = GifMapper.mapGiphyItemsToGifArray(resp.data);
        this.trendingGif.set(gifs);
        this.trendingGifsLoading.set(false);
        console.log({ gifs });
      });
  }
}
