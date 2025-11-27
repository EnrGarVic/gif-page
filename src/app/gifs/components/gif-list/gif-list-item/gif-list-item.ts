import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'gif-list-item',
  imports: [RouterLink],
  templateUrl: './gif-list-item.html',
})
export class GifListItem {
  //todo: imageUrl: string; input
  url = input.required<string>();
}
