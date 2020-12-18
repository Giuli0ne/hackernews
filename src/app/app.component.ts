import { Component,NgModule } from '@angular/core';
import {ARTICLES} from './mockarticles'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hackernews';
  articles = ARTICLES;
}
