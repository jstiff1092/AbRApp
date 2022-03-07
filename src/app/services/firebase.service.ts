import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get, child, DataSnapshot } from 'firebase/database';

const app = initializeApp(environment.firebase);
const database = getDatabase(app);
const dbRef = ref(database);

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor() { }

  //Author: Jeremy Stiff jstiff@ggc.edu
  //Method returns an array containing the antibiotic objects with bacterium childrem
  //Accessing the antibioic name is done through: item.key
  //Accessing the bacterium children is done through: item.val()
  getData(): DataSnapshot[] {
    var item_array: DataSnapshot[] = [];
    get(child(dbRef, '/')).then((snapshot) => {
      if (snapshot.exists()) {
        snapshot.forEach((item) => {
          item_array.push(item);
        });
      } else {
        console.log('No data avaliable');
      }
    }).catch((error) => {
      console.error(error);
    });
    return item_array;
  }

  getKeys(): Array<string> {
    var key_array: string[] = [];
    get(child(dbRef, '/')).then((snapshot) => {
      if (snapshot.exists()) {
        for (var x in snapshot.val()) {
          key_array.push(x);
        }
      } else {
        console.log('No data avaliable');
      }
      return key_array;
    })
      .then((a) => {
        console.log(a);
        console.log(a[0]);
        key_array.concat(a);
      })
      .catch((error) => {
        console.error(error);
      });
    return key_array;
  }

  getVals(): any[] {
    var val_array: any[] = []
    get(child(dbRef, '/')).then((snapshot) => {
      if (snapshot.exists()) {
        for (var x in snapshot.val()) {
          val_array.push(snapshot.val()[x]);
        }
        return val_array;
      } else {
        console.log('No data avaliable');
      }
    }).catch((error) => {
      console.error(error);
    });
    return val_array;
  }
}
