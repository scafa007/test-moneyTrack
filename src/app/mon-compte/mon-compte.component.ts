import { Component, OnInit } from '@angular/core';
import {Paiement} from '../type/paiement';
import {Balance} from '../type/balance';
import {BalanceService} from '../service/balance.service';

@Component({
  selector: 'app-mon-compte',
  templateUrl: './mon-compte.component.html',
  styleUrls: ['./mon-compte.component.css']
})
export class MonCompteComponent implements OnInit {

  private balance: Balance;

  private today: number = Date.now();



  constructor( private balanceService: BalanceService) { }

  ngOnInit() {

    this.balanceService.getBalance().subscribe(balance => this.balance = balance);
  }

}
