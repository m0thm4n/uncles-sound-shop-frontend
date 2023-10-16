import { Component, forwardRef, OnInit } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import { UnclesSoundShopModule } from './app.module';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  standalone: true,
  imports: [
    HomeComponent,
    RouterLink,
    RouterOutlet,
    UnclesSoundShopModule,
  ],
  providers: [{ provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } }, HttpClientModule,],
  styleUrls: ['./app.component.sass'],
  template: `
  <main>
      <header class="brand-name">
        <a [routerLink]="['/']">
          <img id="uncles-chair" src="/assets/IMG_0669.PNG" height=30px width=30px alt="logo" aria-hidden="true">
        </a>
        <button mat-button [matMenuTriggerFor]="menu">Menu</button>
        <mat-menu #menu="matMenu">
          <button mat-menu-item>Item 1</button>
          <button mat-menu-item>Item 2</button>
        </mat-menu>
      </header>
    <section class="content">
      <router-outlet></router-outlet>
    </section>
  </main>
`
})
export class AppComponent {
  constructor() {
  }

  title = 'Uncles Sound Shop';

  ngOnInit() {

  }
}
