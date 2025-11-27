import { Component } from '@angular/core';
import { GiftsSideMenuHeader } from './gifts-side-menu-header/gifts-side-menu-header';
import { GiftsSideMenuOptions } from './gifts-side-menu-options/gifts-side-menu-options';

@Component({
  selector: 'gifs-side-menu',
  imports: [GiftsSideMenuHeader, GiftsSideMenuOptions],
  templateUrl: './gifs-side-menu.html',
})
export class GifsSideMenu {}
