import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, get, child, DataSnapshot } from 'firebase/database';
import { Data } from '@angular/router';

const app = initializeApp(environment.firebase);
const database = getDatabase(app);
const dbRef = ref(database);

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor() {}

  //Author: Jeremy Stiff jstiff@ggc.edu
  //Method returns an array containing the antibiotic objects with bacterium childrem
  //Accessing the antibioic name is done through: item.key
  //Accessing the bacterium children is done through: item.val()
  getData():DataSnapshot[] {
    var item_array:DataSnapshot[] = [];
    get(child(dbRef, '/')).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.forEach((item) => {
          item_array.push(item);
        }));
      } else {
        console.log('No data avaliable');
      }
    }).catch((error) => {
      console.error(error);
    });
    return item_array;
  }
}
