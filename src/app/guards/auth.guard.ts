import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertCtrl: AlertController,
    ){}

  canActivate(
    route: ActivatedRouteSnapshot){
   return true;
  }

  async showAlert(){
    const alert = await this.alertCtrl.create({
      header: 'Not Authorized ',
      message: 'You are not authorized to visit that page',
      buttons: ['OK']
    });
    alert.present();
  }

}
