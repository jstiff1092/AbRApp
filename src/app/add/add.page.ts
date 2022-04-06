import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';


@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  addnewform: FormGroup;

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

  formSubmit(){
      const newAnt = firebase.database().ref('/').push();
      newAnt.set(this.addnewform.value);
      this.router.navigate(['/']);
    }
  }
