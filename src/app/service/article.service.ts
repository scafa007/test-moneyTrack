import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Article} from '../type/Article';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private articleUrl = 'http://private-1e073-testtechniquefront.apiary-mock.com/articles';

  constructor(private http: HttpClient) { }

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.articleUrl);
  }
}
