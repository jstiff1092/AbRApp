import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators, FormControl, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import firebase from 'firebase/compat/app';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  addnewform: FormGroup;
  private bacteriumCount = 1;
  private alertController: AlertController;
  constructor(
    public addnewFormBuilder: FormBuilder,
    public ngroute: Router,
    private router: Router,
    private formBuilder: FormBuilder,
    ) { }

  ngOnInit() {
    this.addnewform = this.formBuilder.group({
      name : [null, Validators.required],
      bacterium : [null, Validators.required],
      zone : [null, Validators.required],
    });
  }

  //communicate with DB and push the information
  //without push command the data will be saved in database without generated id
  //call child functin to set the child node as bacterium, and .set to set the data for bacterium as zone
  formSubmit(){
      const newAnt = firebase.database().ref('/' + this.addnewform.value.name);
      newAnt.child(this.addnewform.value.bacterium).set(this.addnewform.value.zone);
      this.router.navigate(['/dashboard']);
    }

    addBacterium(){
      //(FormArray.push.addnewform.get('bacterium_array')).push(this.formBuilder.control(''));
    }

    removeSlot(control){
      this.addnewform.removeControl(control.key);
    }
  }
