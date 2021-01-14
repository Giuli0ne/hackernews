import { Component, Inject, Input, OnInit} from '@angular/core';
import {Article} from '../article';
import { ArticleService } from '../article.service'

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input() article: Article;

  constructor() { 
    
  }

  ngOnInit() {

  }

  
}
