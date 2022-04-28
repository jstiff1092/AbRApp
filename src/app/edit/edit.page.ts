import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Antibiotic } from '../shared/Antibiotic';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  dataList = [];
  antiB = this.dataBase.getAntibioticList();

  constructor(
    private dataBase: FirebaseService,
    private router: Router,

  ) { }

  ngOnInit() {
    this.getAllAnts();
    this.antiB.snapshotChanges().subscribe(res => {
      this.dataList = [];
      res.forEach(item => {
        let ant = item.payload.toJSON();
        ant = item.key;
        this.dataList.push(ant as Antibiotic);
      });
    });
  }

  getAllAnts(){
    this.dataBase.getAntibioticList().valueChanges().subscribe(res => {
      console.log(res);
    });
  }

  editPage(key){
    console.log(key);
    this.router.navigate(['edit-antibiotic/' + (key)]);

  }
}
