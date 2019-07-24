import { Component, OnInit } from '@angular/core';
import {Paiement} from "../type/paiement";
import {PaiementService} from "../service/paiement.service";

@Component({
  selector: 'app-mes-paiements',
  templateUrl: './mes-paiements.component.html',
  styleUrls: ['./mes-paiements.component.css']
})
export class MesPaiementsComponent implements OnInit {

  private paiements: Paiement[] = [];

  constructor(
    private paiementService:PaiementService
  ) { }

  ngOnInit() {
    this.paiementService.getPaiement().subscribe( paiements => this.paiements = paiements);
  }

}
