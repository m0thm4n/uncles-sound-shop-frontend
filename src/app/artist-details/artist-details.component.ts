import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-artist-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <img [src]="this.artCover" [width]="150" [height]="150" />
    <h2>Song Name: {{this.songName}}</h2>
  `,
  styleUrls: ['./artist-details.component.sass']
})
export class ArtistDetailsComponent {
  public artCover: string = "./assets/IMG_0669.PNG"
  public songName: string = "Hold My Beer.";
}
