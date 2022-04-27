import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: any;
  constructor(
    public ngAuth: AngularFireAuth,
    ) {
      this.ngAuth.authState.subscribe((user) => {
        if (user) {
          this.userData = user;
          localStorage.setItem('user', JSON.stringify(this.userData));
          JSON.parse(localStorage.getItem('user'));
        } else {
          localStorage.setItem('user', null);
          JSON.parse(localStorage.getItem('user'));
        }
      });
    }
 get isEmailVerified(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user.emailVerified !== false ? true : false;
  }

  isLoggedIn() {
    return of(true).pipe(delay(500));
  //   const user = JSON.parse(localStorage.getItem('user'));
  //   return user !==null && user.emailVerified !== false ? true : false;
  }



  login( email: string, password: string ) {
      return this.ngAuth.signInWithEmailAndPassword(email, password).then(() =>
      {
        console.log(this.userData);
      });
    }

  logout() {
    return this.ngAuth.signOut().then(() => {
      localStorage.removeItem('user');
    });
  }
}
