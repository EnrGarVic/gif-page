import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import SearchPage from '../search-page/search-page';
import TrendingPage from '../trending-page/trending-page';
import { GiftsSideMenuHeader } from '../../components/gifs-side-menu/gifts-side-menu-header/gifts-side-menu-header';
import { GiftsSideMenuOptions } from '../../components/gifs-side-menu/gifts-side-menu-options/gifts-side-menu-options';
import { GifsSideMenu } from '../../components/gifs-side-menu/gifs-side-menu';

@Component({
  selector: 'app-dashboard-page',
  imports: [RouterOutlet, GifsSideMenu],
  templateUrl: './dashboard-page.html',
  styleUrl: './dashboard.css',
})
export default class DashboardPage {}
