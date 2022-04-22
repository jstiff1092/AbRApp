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

  getAntibioticList(){
    this.antibioticListRef = this.db.list('/');
    return this.antibioticListRef;
  }

  deleteAntibiotic(){
    this.antibioticRef = this.db.object('/' + child);
    this.antibioticRef.remove();
  }

  getAntibiotic(){
    this.antibioticRef = this.db.object('/' + child);
    return this.antibioticRef;
  }

  updateAntibiotic(){
    return this.antibioticRef.update({
      antibiotic: '',
      bacterium: '',
      zone: '',
    });
  }

}
