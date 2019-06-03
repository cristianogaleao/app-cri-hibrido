import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CadastroDeProdutoPage } from './cadastro-de-produto.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroDeProdutoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CadastroDeProdutoPage]
})
export class CadastroDeProdutoPageModule {}
