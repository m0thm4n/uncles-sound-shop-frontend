import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router'
import { GalleryModule } from 'ng-gallery';
import { PlayerComponent } from '../player/player.component';

@Component({
  template: `
    <head>
    <link rel="stylesheet" href="home.component.sass">
  </head>
  <body>
    <app-player></app-player>
  </body>
    `,
  standalone: true,
  imports: [GalleryModule, CommonModule, RouterModule, PlayerComponent],
  providers: [],
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {

  }
}
