import { Component, OnInit } from '@angular/core';
import {Paiement} from "../type/paiement";
import {PaiementService} from "../service/paiement.service";
import {ArticleService} from "../service/article.service";
import {Observable, of, Subject, zip} from "rxjs";
import {PaiementView} from "../type/PaiementView";
import {debounceTime, distinctUntilChanged, map, switchMap} from "rxjs/operators";

@Component({
  selector: 'app-mes-paiements',
  templateUrl: './mes-paiements.component.html',
  styleUrls: ['./mes-paiements.component.css']
})
export class MesPaiementsComponent implements OnInit {

  private paiements: PaiementView[] = [];
  private searchTerms = new Subject<string>();
  private paiementsObservable: Observable<PaiementView[]> = of(this.paiements);


  constructor(
    private paiementService: PaiementService,
    private articleService: ArticleService
  ) { }

  ngOnInit() {

    this.searchTerms.pipe(

      debounceTime(300),

      distinctUntilChanged(),

      switchMap((term: string) => this.paiementsObservable)
    );
    zip(this.paiementService.getPaiement(),this.articleService.getArticles())
      .pipe(
      map(([paiements, articles]) => {
        var paiementsView: PaiementView[] = [];

        paiements.forEach( paiement =>{
          var paiementView : PaiementView = {};

          paiementView.dateAchat = paiement.payment_date;
          paiementView.article_id = paiement.article_id;
          paiementView.etat = paiement.state;

          const attachedArticle = articles.find(article => article.id === paiement.article_id);

          if(attachedArticle){
            paiementView.montant = attachedArticle.price;
            paiementView.libelle = attachedArticle.label;
          }
          console.log(paiementView);
          paiementsView.push(paiementView);
        })
        return paiementsView;

      })
    ).subscribe(value => {
      this.paiements = value
    });

  }

}
