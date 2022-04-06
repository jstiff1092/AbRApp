import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, get, child } from 'firebase/database';
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

  getData() {
    get(child(dbRef, '/')).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
      } else {
        console.log('No data avaliable');
      }
    }).catch((error) => {
      console.error(error);
    });
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
