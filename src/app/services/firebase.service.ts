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

  //Author: Jeremy Stiff jstiff@ggc.edu
  //Returns a promise that can be interacted with via .then()
  //The promise contains the DataSnapshot which holds the keys and values of the database
  //These can be extracted from the DataSnapshot as arrays via the Object.keys() and Object.values() methods
  async getDataSnapshot(): Promise<DataSnapshot> {
    try {
      var key_array = await get(child(dbRef, '/'));
      return key_array.val();
    } catch (error) {
      console.log("Error while awaiting data snapshot.");
      console.log(error);
    }
  }
//create
writeAntibiotic(name: string, bact: string, zone: string) {
  const db = getDatabase();
  set(ref(db, '/' + name), {
    antibiotic: name,
    bacterium: bact,
    zoneoi: zone
  });
}

  createAntibiotic(ant: Antibiotic){
    return this.antibioticListRef.push({
      name: ant.name,
      bacterium: ant.bacterium,
      zone: ant.zone,
    });
  }

  //get single
  getAntibiotic(name: string){
    this.antibioticRef = this.db.object('/' + name);
    return this.antibioticRef;
  }

  //get list
  getAntibioticList(){
    this.antibioticListRef = this.db.list('/' + name);
    return this.antibioticListRef;
  }

  //update
  updateAntibiotic(name, ant: Antibiotic){
    return this.antibioticRef.update({
      name: ant.name,
      bacterium: ant.bacterium,
      zone: ant.zone,
    });

    }

    //delete
    deleteAntibiotic(name: string){
      this.antibioticRef = this.db.object('/' + name);
      this.antibioticRef.remove();
    }
}
