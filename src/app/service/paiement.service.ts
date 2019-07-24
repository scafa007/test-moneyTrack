import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Paiement} from '../type/paiement';
import {Observable} from 'rxjs';
import {Article} from '../type/Article';

@Injectable({
  providedIn: 'root'
})
export class PaiementService {

  private basepaiementUrl = 'http://private-1e073-testtechniquefront.apiary-mock.com/payments';

  constructor(private http: HttpClient) { }

  getPaiement(): Observable<Paiement[]> {
    return this.http.get<Paiement[]>(this.basepaiementUrl);
  }

  postPaiement(article: Article): Observable<Paiement> {
    return this.http.post(this.basepaiementUrl, article);
  }


}
