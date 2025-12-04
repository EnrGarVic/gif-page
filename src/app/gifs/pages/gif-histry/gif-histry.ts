import { GifService } from 'src/app/gifs/services/gifs.service';
import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { GifList } from '../../components/gif-list/gif-list';

@Component({
  selector: 'app-gif-histry',
  imports: [GifList],
  templateUrl: './gif-histry.html',
})
export default class GifHistry {
  GifService = inject(GifService);

  query = toSignal(inject(ActivatedRoute).params.pipe(map((params) => params['query'])));

  gifsByKey = computed(() => {
    return this.GifService.getHistoryGifs(this.query());
  });
}
