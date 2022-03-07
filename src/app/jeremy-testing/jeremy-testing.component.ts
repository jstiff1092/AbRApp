import { Component, OnInit } from '@angular/core';
import { DataSnapshot } from 'firebase/database';

//Needed import to use the Firebase service to get the data
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-jeremy-testing',
  templateUrl: './jeremy-testing.component.html',
  styleUrls: ['./jeremy-testing.component.scss'],
})
export class JeremyTestingComponent implements OnInit {

  constructor(private firebaseservice: FirebaseService) { }

  key_array: string[] = [];
  val_array: any[] = [];


  //Author: Jeremy Stiff jstiff@ggc.edu
  ngOnInit() {
    //This code takes the promise returned from getDataSnapshot() as 'a' and extracts the values to the key and value arrays when the component is initialized
    this.firebaseservice.getDataSnapshot()
      .then((a) => {
        this.key_array = Object.keys(a);
        this.val_array = Object.values(a);
        console.log(this.key_array);
        console.log(this.val_array);
      });
  }
}
