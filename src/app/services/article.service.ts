import { inject, Injectable } from '@angular/core';
import { Article } from '../models/article.model';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  http = inject(HttpClient);
  public getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(`http://localhost:3000/articles`);
  }
  public getPopularArticles(): Observable<Article[]> {
    return this.http
      .get<Article[]>('http://api.exemple.com/articles')
      .pipe(map((data) => data.filter((article) => article.likeCount > 100)));
  }
  public getArticleById(id: number): Observable<Article> {
    return this.http.get<Article>(`http://localhost:3000/articles/${id}`);
  }
}
