import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree} from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertCtrl: AlertController,
    ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
      | Observable<boolean | UrlTree >
      | Promise<boolean | UrlTree>
      | boolean
      | UrlTree {
    {
   return this.authService.isLoggedIn().pipe(
     map(isLoggedIn => isLoggedIn || this.router.createUrlTree([]))
   );
  }

  // async showAlert(){
  //   const alert = await this.alertCtrl.create({
  //     header: 'Not Authorized ',
  //     message: 'You are not authorized to visit that page',
  //     buttons: ['OK']
  //   });
  //   alert.present();
  // }

}
}

