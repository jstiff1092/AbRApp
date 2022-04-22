import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Antibiotic } from '../shared/Antibiotic';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  dataList = [];

  constructor(
    private dataBase: FirebaseService,

  ) { }

  ngOnInit() {
    this.getAllAnts();
    const antiRes = this.dataBase.getAntibioticList();
    antiRes.snapshotChanges().subscribe(res => {
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

  removeEntry(child){
    console.log(child);
    if(window.confirm('DO You Want To Delete?')){
      this.dataBase.deleteAntibiotic();
    }
  }

}
