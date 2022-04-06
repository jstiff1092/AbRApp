import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService{
  private toastobject: any;

  constructor(public toast: ToastController){}

  showToast(toastmsg: any, dur: any){
    this.toastobject = this.toast.create({
      message: toastmsg,
      duration: dur
    }).then((toastData) => {
      toastData.present();
    });
  }

  hideToast(){
    this.toastobject = this.toast.dismiss();
  }
}
