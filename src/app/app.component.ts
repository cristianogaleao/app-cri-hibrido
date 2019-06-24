import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [

    {
      title: 'Home',
      url: '/home-cliente',
      icon: 'home'
    },

    {
      title: 'Cadastre sua Loja',
      url: '/cadastro-de-loja',
      icon: 'add-circle-outline'
    },
    {
      title: 'Logoff',
      url: '/logoff',
      icon: 'walk'
    },

    
  
  
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private firebaseauth : AngularFireAuth,
    private router : Router
    
  ) {
    this.initializeApp();
  }

  ngOnInit() {

    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    this.firebaseauth.authState
      .subscribe(
        user => {
          if (user) {
            this.router.navigate(['/home-cliente']);

            } else {
              this.router.navigate(['/']);
            }
        },
        () => {
          this.router.navigate(['/home-cliente']);
        }
      );
  }  
    
}
