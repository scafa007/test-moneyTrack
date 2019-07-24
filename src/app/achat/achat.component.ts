import { Component, OnInit } from '@angular/core';
import {Article} from "../type/Article";
import {ArticleService} from "../service/article.service";
import {Balance} from "../type/balance";
import {BalanceService} from "../service/balance.service";

@Component({
  selector: 'app-achat',
  templateUrl: './achat.component.html',
  styleUrls: ['./achat.component.css']
})
export class AchatComponent implements OnInit {

  private articles: Article[] =[];
  private balance: Balance;
  private selectArticle : Article ={};

  constructor(private articleService: ArticleService, balanceService: BalanceService) {

  }

  ngOnInit() {
    this.articleService.getArticles()
      .subscribe( articles => {
        this.articles = articles;
        this.selectArticle = this.articles[0];
      });
  }

  setSelected(article: Article){
    this.selectArticle = article;
  }

}
