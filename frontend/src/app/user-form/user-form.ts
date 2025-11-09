import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  imports: [ReactiveFormsModule],
  templateUrl: './user-form.html',
  styleUrl: './user-form.css',
})
export class UserForm {

  //[cite_start]// propriété attendue par notre backend .
  userForm = new FormGroup({
    
    name: new FormControl(''), 
    
    firstname: new FormControl(''), 
    
    
    email: new FormControl(''), 
    
    
    role: new FormControl('')  
  });

  
  onSubmit() {
    
    console.log("Données du formulaire :", this.userForm.value);
  }


}
