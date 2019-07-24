import {Component, OnInit} from '@angular/core';
import {PaiementService} from '../service/paiement.service';
import {ArticleService} from '../service/article.service';
import {Observable, zip} from 'rxjs';
import {PaiementView} from '../type/PaiementView';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-mes-paiements',
  templateUrl: './mes-paiements.component.html',
  styleUrls: ['./mes-paiements.component.css']
})
export class MesPaiementsComponent implements OnInit {

  private paiements: PaiementView[] = [];
  private paiementsearch: PaiementView[] = [];
  private paiementsObservable: Observable<PaiementView[]> ;


  constructor(
    private paiementService: PaiementService,
    private articleService: ArticleService
  ) { }

  ngOnInit() {

    this.paiementsObservable = zip(this.paiementService.getPaiement(), this.articleService.getArticles())
      .pipe(
      map(([paiements, articles]) => {
        const paiementsView: PaiementView[] = [];

        paiements.forEach( paiement => {
          const paiementView: PaiementView = {};

          paiementView.dateAchat = paiement.payment_date;
          paiementView.article_id = paiement.article_id;
          paiementView.etat = paiement.state;

          const attachedArticle = articles.find(article => article.id === paiement.article_id);

          if (attachedArticle) {
            paiementView.montant = attachedArticle.price;
            paiementView.libelle = attachedArticle.label;
          }
          console.log(paiementView);
          paiementsView.push(paiementView);
        });
        return paiementsView;

      })
    );

    this.paiementsObservable.subscribe(value => {
      this.paiements = value;
      this.paiementsearch = this.paiements;

    });

  }
  search(term: string): void {
    if (!term.trim()) {
      this.paiementsearch = this.paiements;
    }
    this.paiementsearch = this.paiements.filter(paiement => (paiement.montant + '').includes(term) || paiement.libelle.includes(term) );
  }

}
