import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Balance} from '../type/balance';

@Injectable({
  providedIn: 'root'
})
export class BalanceService {

  private balanceUrl = 'https://private-1e073-testtechniquefront.apiary-mock.com/balance';

  constructor(private http: HttpClient) { }

  getBalance(): Observable<Balance> {
    return this.http.get<Balance>(this.balanceUrl);
  }
}
