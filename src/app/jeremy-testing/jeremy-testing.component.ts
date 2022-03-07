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

  item_array: DataSnapshot[] = [];
  key_array: Array<string> = []
  val_array: any[] = [];
  ele_array = [];
  test = [];


  //Author: Jeremy Stiff jstiff@ggc.edu
  //Using the ngOnInit() method to get the data when the component is loaded
  //The array contains the items that have item.key and item.val()
  ngOnInit() {
    //this.item_array = this.firebaseservice.getData();
    this.key_array = this.firebaseservice.getKeys();
    //this.firebaseservice.getSnapshot();
    this.val_array = this.firebaseservice.getVals();
    //this.test = this.firebaseservice.getTest();
    //console.log(this.item_array);
    console.log(this.key_array);
    //console.log(this.snapshot);
    console.log(this.val_array);
  }

}
