import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
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
      <app-artist-details class='artist'></app-artist-details>
      <audio controls [volume]="0.1" class='audio'><source [src]="myAudio" /></audio>
    </div>
    <div class='song'>
      <app-artist-details class='artist'></app-artist-details>
      <audio controls [volume]="0.1" class='audio'><source [src]="myAudio2" /></audio>
    </div>
    <div class='song'>
      <app-artist-details class='artist'></app-artist-details>
      <audio controls [volume]="0.1" class='audio'><source [src]="myAudio3" /></audio>
    </div>
    `,
  styleUrls: ['./player.component.sass']
})
export class PlayerComponent {
  public myAudio = "./assets/Cozy - Mountains Ambient 2(full orchestra).wav";
  public myAudio2 = "./assets/COZY - PLAINS_THEME ROUGH 1.wav";
  public myAudio3 = "./assets/Cozy - Desert Theme main 1.wav";
}
