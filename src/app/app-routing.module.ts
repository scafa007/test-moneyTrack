import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MesPaiementsComponent} from './mes-paiements/mes-paiements.component';
import {AchatComponent} from './achat/achat.component';
import {MonCompteComponent} from './mon-compte/mon-compte.component';


const routes: Routes = [
  { path: '', redirectTo: '/mesPaiements', pathMatch: 'full' },
  { path: 'mesPaiements', component: MesPaiementsComponent },
  { path: 'achat', component: AchatComponent },
  { path: 'monCompte', component: MonCompteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
