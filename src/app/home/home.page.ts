import { Component, OnInit } from '@angular/core';
import { RouterEvent } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';
import { Antibiotic } from '../shared/Antibiotic';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{
  public antiList: any;
  constructor(private firebase: FirebaseService) {}

  ngOnInIt(){
  }

  async initializeItems(): Promise<any> {
    const antiItem = await this.initializeItems();
    return this.antiList;
  }

  async filterList(evt) {
    this.antiList = await this.initializeItems();
    const searchTerm = evt.srcElement.value;

    if (!searchTerm){
      return;
    }

    this.antiList = this.antiList.filterList(currentAnti => {
      if (currentAnti.name && searchTerm){
        return (currentAnti.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 ||
        currentAnti.type.toLowerCase().indexOf(searchTerm.toLowerCase()));
      }
    });
  }
}
