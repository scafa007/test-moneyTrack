import {Component, OnInit} from '@angular/core';
import {Article} from '../type/Article';
import {ArticleService} from '../service/article.service';

import {BalanceService} from '../service/balance.service';
import {zip} from 'rxjs';
import {map} from 'rxjs/operators';
import {PaiementService} from '../service/paiement.service';


@Component({
  selector: 'app-achat',
  templateUrl: './achat.component.html',
  styleUrls: ['./achat.component.css']
})
export class AchatComponent implements OnInit {

  private articles: Article[] = [];

  private selectArticle: Article = {};

  constructor(private articleService: ArticleService, private balanceService: BalanceService, private paiementService: PaiementService) {

  }

  ngOnInit() {

    zip( this.articleService.getArticles(), this.balanceService.getBalance())
      .pipe(
        map(([articles, balance]) => {
          return {articles, balance};
        })
      )
      .subscribe( value => {
      this.articles = value.articles.filter(article => article.price < value.balance.balance);
    });
  }

  acheteArticle() {
    if (this.selectArticle.id) {
      this.paiementService.postPaiement(this.selectArticle).subscribe(value => {
        console.log("c est achete", value);
      })
    }

  }

}
