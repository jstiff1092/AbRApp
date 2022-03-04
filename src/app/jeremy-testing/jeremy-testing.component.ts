import { Component, OnInit } from '@angular/core';
import { DataSnapshot } from 'firebase/database';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-jeremy-testing',
  templateUrl: './jeremy-testing.component.html',
  styleUrls: ['./jeremy-testing.component.scss'],
})
export class JeremyTestingComponent implements OnInit {

  constructor(private firebaseservice: FirebaseService) { }

  item_array: DataSnapshot[] = [];


  //Author: Jeremy Stiff jstiff@ggc.edu
  //Using the ngOnInit() method to get the data when the component is loaded
  //The array contains the items that have item.key and item.val()
  ngOnInit() {
    console.log('The console works!');
    this.item_array = this.firebaseservice.getData();
    console.log(this.item_array);
  }

}
