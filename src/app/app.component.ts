import { Component,NgModule, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from './article';
import { ArticleService } from './article.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hackernews: a new hope';
  articleIds : number[];
  articles : Article[] = [];

  constructor(private articleService: ArticleService){
    this.articleService.getArticleIds().subscribe(a => this.articleService.getItems(a).subscribe(b => this.articles.push(b)));
    //console.log(this.articleIds)
    //this.articleService.getAllArticles(this.articleIds).subscribe(a => this.articles = a);

  }
  ngOnInit() {
    
  }

}
