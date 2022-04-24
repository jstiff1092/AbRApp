import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, get, child, DataSnapshot } from 'firebase/database';
import { Antibiotic } from 'src/app/shared/Antibiotic';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireList } from '@angular/fire/compat/database';
import { AngularFireObject } from '@angular/fire/compat/database';

const app = initializeApp(environment.firebase);
const database = getDatabase(app);
const dbRef = ref(database);

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  antibioticListRef: AngularFireList<any>;
  antibioticRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) {}

  async getDataSnapshot(): Promise<DataSnapshot> {
    try {
      const keyArray = await get(child(dbRef, '/'));
      return keyArray.val();
    } catch (error) {
      console.log('Error while awaiting data snapshot.');
      console.log(error);
    }
  }

  getAntibioticList(){
    this.antibioticListRef = this.db.list('/');
    return this.antibioticListRef;
  }

  deleteAntibiotic(name: string){
    this.antibioticRef = this.db.object('/' + child(dbRef, '/'));
    this.antibioticRef.remove();
  }

  getAntibiotic(){
    this.antibioticRef = this.db.object('/' + child(dbRef, '/'));
    return this.antibioticRef;
  }

  async updateAntibiotic(ant: Antibiotic){
    return this.antibioticRef.update({
      antibiotic: '',
      bacterium: '',
      zone: '',
    });
  }

  async delAntibiotic(key){
    this.db.object('/' + key).remove();
  }

}
