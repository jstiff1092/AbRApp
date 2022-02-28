import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, get, child } from 'firebase/database';

const app = initializeApp(environment.firebase);
const database = getDatabase(app);
const dbRef = ref(database);

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor() {}

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
}
