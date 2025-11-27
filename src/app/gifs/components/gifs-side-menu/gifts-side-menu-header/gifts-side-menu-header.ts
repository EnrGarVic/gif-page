import { Component } from '@angular/core';
import { environment } from '@environments/environment.development';

@Component({
  selector: 'gifts-side-menu-header',
  imports: [],
  templateUrl: './gifts-side-menu-header.html',
})
export class GiftsSideMenuHeader {
  envs = environment;
}
