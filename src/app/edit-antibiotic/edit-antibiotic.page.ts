import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-edit-antibiotic',
  templateUrl: './edit-antibiotic.page.html',
  styleUrls: ['./edit-antibiotic.page.scss'],
})
export class EditAntibioticPage implements OnInit {

  updateAntibioticForm: FormGroup;
  id: any;

  constructor(
    private dbService: FirebaseService,
    private antRoute: ActivatedRoute,
    private router: Router,
    public formBuild: FormBuilder,
  ) {
    this.id = this.antRoute.snapshot.paramMap.get('id');
    this.dbService.getAntibiotic().valueChanges().subscribe(res => {
      this.updateAntibioticForm.setValue(res);
    });
   }

  ngOnInit() {
    this.updateAntibioticForm = this.formBuild.group({
      antibiotic: [''],
      bacterium: [''],
      zone: [''],
    });
    console.log(this.updateAntibioticForm.value);
  }

  updateForm(){
    this.dbService.updateAntibiotic(this.updateAntibioticForm.value).then(() => {
      this.router.navigate(['/edit']);
    })
    .catch(error => console.log(error));
  }

}
