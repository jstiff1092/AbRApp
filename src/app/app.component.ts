import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  activePageTitle = 'Home';
  pages = [
    {
      title: 'Home',
      url: 'home',
      icon: 'home'
    },
    {
      title: 'Dashboard',
      url: 'dashboard',
      icon: 'albums'
    },
    {
      title: 'Login',
      url: '/login',
      icon: 'person'
    }
  ];
  constructor(
    private platform: Platform,
    private statusbar: StatusBar,
    private splashscreen: SplashScreen,
    private firebaseauth: AngularFireAuth,
    public ngroute: Router
  ) {
    this.initializeApp();
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusbar.styleDefault();
      this.splashscreen.hide();
    });
  }
}

