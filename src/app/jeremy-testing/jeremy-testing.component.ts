import { Component, OnInit } from '@angular/core';

//Needed import to use the Firebase service to get the data
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-jeremy-testing',
  templateUrl: './jeremy-testing.component.html',
  styleUrls: ['./jeremy-testing.component.scss'],
})
export class JeremyTestingComponent implements OnInit {

  constructor(private firebaseservice: FirebaseService) { }

  object_array: any[] = [];
  key_array: string[] = [];
  val_array: any[] = [];


  //Author: Jeremy Stiff jstiff@ggc.edu
  ngOnInit() {
    //This code is run when the compoent is loaded on the web page
    //This code takes the promise returned from getDataSnapshot() as 'a' and extracts the values to the key and value arrays when the component is initialized
    //Saves database to localStorage, checks to see if enabled first

    if (this.checkLocal) { //Check if localStorage is enabled
      if (localStorage.getItem("data") == null) { //This code executes if localStorage is enabled and data does not exist
        this.firebaseservice.getDataSnapshot()
          .then((a) => {
            this.object_array = Object.entries(a);
            this.key_array = Object.keys(a);
            this.val_array = Object.values(a);
            console.log(this.object_array);
            console.log(this.key_array);
            console.log(this.val_array);
            localStorage.setItem("data", JSON.stringify(this.object_array));
          });
      } else { //This code executes if localStorage is enabled and data exists
        this.object_array = JSON.parse(localStorage.getItem("data"));
        console.log(this.object_array);
        this.object_array.forEach((a) => {
          this.key_array.push(a[0]);
          this.val_array.push(a[1]);
        });
        console.log(this.key_array);
        console.log(this.val_array);
      }
    } else { //This code executes if localStorage is not enabled
      if (localStorage.getItem("data") == null) {
        this.firebaseservice.getDataSnapshot()
          .then((a) => {
            this.object_array = Object.entries(a);
            this.key_array = Object.keys(a);
            this.val_array = Object.values(a);
            console.log(this.object_array);
            console.log(this.key_array);
            console.log(this.val_array);
          });
      }
    }
  }

  //Author: Jeremy Stiff jstiff@ggc.edu
  //Function to check if localStorage is enabled on user browser
  checkLocal(): boolean {
    try {
      const key = "__testing key to determine if localstorage is enabled__";
      localStorage.setItem(key, key);
      localStorage.removeItem(key);
    } catch (e) {
      return false;
    }
    return true;
  }
}
