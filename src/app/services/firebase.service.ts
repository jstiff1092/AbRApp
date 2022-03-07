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
  //Returns a promise that can be interacted with via .then()
  //The promise contains the DataSnapshot which holds the keys and values of the database
  //These can be extracted from the DataSnapshot as arrays via the Object.keys() and Object.values() methods
  async getDataSnapshot(): Promise<DataSnapshot> {
    try {
      var key_array = await get(child(dbRef, '/'));
      return key_array.val();
    } catch (error) {
      console.log("Error!");
      console.log(error);
    }
  }

  //Author: Jeremy Stiff jstiff@ggc.edu
  //DEPRECIATED CODE
  //getData(): DataSnapshot[] {
  //  var item_array: DataSnapshot[] = [];
  //  get(child(dbRef, '/')).then((snapshot) => {
  //    if (snapshot.exists()) {
  //      snapshot.forEach((item) => {
  //        item_array.push(item);
  //      });
  //    } else {
  //      console.log('No data avaliable');
  //    }
  //  }).catch((error) => {
  //    console.error(error);
  //  });
  //  return item_array;
  //}

  //Author: Jeremy Stiff jstiff@ggc.edu
  //DEPRECIATED CODE
  //getKeys(): any {
  //  var key_array = get(child(dbRef, '/')).then((snapshot) => {
  //    var temparray = [];
  //    if (snapshot.exists()) {
  //      for (var x in snapshot.val()) {
  //        temparray.push(x);
  //      }
  //    } else {
  //      console.log('No data avaliable');
  //    }
  //    return temparray;
  //  })
  //    .catch((error) => {
  //      console.error(error);
  //    });
  //  return key_array
  //}

  //Author: Jeremy Stiff jstiff@ggc.edu
  //DEPRECIATED CODE
  //getVals(): any[] {
  //  var val_array: any[] = []
  //  get(child(dbRef, '/')).then((snapshot) => {
  //    if (snapshot.exists()) {
  //      for (var x in snapshot.val()) {
  //        val_array.push(snapshot.val()[x]);
  //      }
  //      return val_array;
  //    } else {
  //      console.log('No data avaliable');
  //    }
  //  }).catch((error) => {
  //    console.error(error);
  //  });
  //  return val_array;
  //}
}
