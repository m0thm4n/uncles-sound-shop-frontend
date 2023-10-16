import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from '../player/player.component';

@Component({
  selector: 'app-in-game-sound-tracks',
  standalone: true,
  imports: [CommonModule, PlayerComponent],
  template: `
    <app-player></app-player>
  `,
  styleUrls: ['./in-game-sound-tracks.component.sass']
})
export class InGameSoundTracksComponent {

}
