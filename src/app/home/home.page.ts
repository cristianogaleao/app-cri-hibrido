import { Component, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuController, ModalController } from '@ionic/angular';
import { Loja } from '../model/loja';
import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { Produto } from '../model/produto';
import { TestePage } from '../teste/teste.page';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild("textoBusca") textoBusca;


  produto: Produto = new Produto();
  firestore = firebase.firestore();
  settings = { timestampsInSnapshots: true };
  
  loja: Loja = new Loja();
  email : string;

  listaPerfil : Loja[] = []; 

  listaDeProduto : Produto[] = [];


    constructor(public router : Router,
                private menu: MenuController,
                private firebaseauth : AngularFireAuth,
                public activatedRoute: ActivatedRoute,
                public modalController: ModalController){
        
      
    }

  ngOnInit() {
      
    }
   
    busca(){
      console.log(this.textoBusca.value)
      
      this.listaDeProduto = [];
        var ref = firebase.firestore().collection("produto");
        //ref.orderBy('nome').startAfter(this.textoBusca.value).get().then(doc=> {
        ref.orderBy('nome').startAfter(this.textoBusca.value).endAt(this.textoBusca.value+'\uf8ff').get().then(doc=> {
  
          if (doc.size>0) {
            
            doc.forEach(doc =>{
  
              this.produto = new Produto();
              this.produto.setDados(doc.data());
              this.produto.id = doc.id;
              
              
                console.log(this.produto);
                this.listaDeProduto.push(this.produto);
                
                
            })
            
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
        })
      
      //this.router.navigate(['/Produto', { 'filtro': "busca" }]);
    }

  cadastrarLoja(){
  this.router.navigate(['/cadastro-de-loja']);
  }
  
  bcaa(){
    this.router.navigate(['/bcaa']);
    }
  whey(){
    this.router.navigate(['/whey-list']);
  }
  creatina(){ 
    this.router.navigate(['/creatina-list']);
  }
  tribulus(){
    this.router.navigate(['/tribulus-list']);
  }

  logar(){
    this.router.navigate(['/list']);
    }
  logoff(){
      this.router.navigate(['/logoff']);
      }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  CalculeSuaIMC(){
    this.router.navigate(['/imc']);

  }

  async showModal() {
    const modal = await this.modalController.create({
      component: TestePage
    });
    return await modal.present();
  }
  
  
  
}
