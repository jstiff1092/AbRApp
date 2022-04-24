import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Antibiotic } from '../shared/Antibiotic';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.page.html',
  styleUrls: ['./delete.page.scss'],
})
export class DeletePage implements OnInit {

  dataList = [];

  constructor(
    private dataBase: FirebaseService,
    private router: Router,

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

  //this will take the key value from the array and it will delete that entry from the database
  removeEntry(key){
    console.log('This Will Be Deleted', key);
   if(window.confirm('Do You Want To Delete the entry ' + key + '. This Will Remove This From The Database PERMANENTLY!')){
    this.dataBase.delAntibiotic(key);
    this.router.navigateByUrl('/dashboard');

    }
  }
}
