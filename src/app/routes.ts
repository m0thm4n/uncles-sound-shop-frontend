import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InGameSoundTracksComponent } from './in-game-sound-tracks/in-game-sound-tracks.component';
import { GameSoundEffectsComponent } from './game-sound-effects/game-sound-effects.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page'
  },
  {
    path: 'game-sound-effects',
    component: GameSoundEffectsComponent,
    title: 'Game Sound Effects page'
  },
  {
    path: 'in-game-sound-tracks',
    component: InGameSoundTracksComponent,
    title: 'In Game Sound Tracks page'
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
    title: 'Contact Us page'
  },
];

export default routeConfig;


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
