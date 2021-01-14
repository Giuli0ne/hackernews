import { Injectable } from '@angular/core';
import { Article } from './article';
import { Observable, throwError,forkJoin,from } from 'rxjs';
import { catchError, retry, map,tap, mergeMap, concatMap } from 'rxjs/operators';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  
  constructor(private http: HttpClient) { }

  getArticle(articleId): Observable<Article> {
    return this.http.get<Article>(`https://hacker-news.firebaseio.com/v0/item/${articleId}.json`)
  }

  getArticleIds(): Observable<number[]>{
    return this.http.get<number[]>('https://hacker-news.firebaseio.com/v0/topstories.json')
  }

  getItems(ids: number[]): Observable<Article> {
    return from(ids).pipe(
       mergeMap(id => <Observable<Article>> this.http.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`))
    );
  }
}
