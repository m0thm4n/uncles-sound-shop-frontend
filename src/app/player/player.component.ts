import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Track } from 'ngx-audio-player';
import { UnclesSoundShopModule } from '../app.module';
import { ArtistDetailsComponent } from '../artist-details/artist-details.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [
    CommonModule,
    UnclesSoundShopModule,
    ArtistDetailsComponent,
    RouterModule,
  ],
  template: `
    <div class='song'>
      <app-artist-details></app-artist-details>
      <audio controls [volume]="0.1"><source [src]="myAudio" /></audio>
    </div>
    `,
  styleUrls: ['./player.component.sass']
})
export class PlayerComponent {
  public myAudio = "./assets/Cozy - Mountains Ambient 2(full orchestra).wav";
}
