import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CadastroDeLojaLogadoPage } from './cadastro-de-loja-logado.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroDeLojaLogadoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CadastroDeLojaLogadoPage]
})
export class CadastroDeLojaLogadoPageModule {}
