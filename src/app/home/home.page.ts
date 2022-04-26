import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  resistance: string; 
  result: any;
  determineResistance: any;
  selected_antibiotic: any;
  selected_bacterium: any;
  user_input: any;
  workable_array: any;
  constructor(public alertCtrl: AlertController) { }  
  async showSubmit() {  
    const alert = await this.alertCtrl.create({  
      header: 'Result:', 
      subHeader: 'Resistant',
      
          buttons: ['Cancel','OK']  
          
    });  
    await alert.present();  
  }  
  
}  
