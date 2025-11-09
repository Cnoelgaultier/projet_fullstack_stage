import { Component } from '@angular/core';

import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms'; 
import { CommonModule } from '@angular/common'; 


import { UserService } from '../user.service';

@Component({
  selector: 'app-user-form',
  standalone: true,
 
  imports: [ReactiveFormsModule, CommonModule], 
  templateUrl: './user-form.html',
  styleUrl: './user-form.css'
})
export class UserForm {

  userForm = new FormGroup({
  
    name: new FormControl('', [Validators.required]), 
    email: new FormControl('', [Validators.required, Validators.email]), 
    role: new FormControl('', [Validators.required])  
  });

 
  constructor(private userService: UserService) {}


  onSubmit() {
    if (this.userForm.valid) {
      
      console.log("Envoi au backend :", this.userForm.value);
      
      this.userService.addUser(this.userForm.value).subscribe({
        
       
        next: (response: any) => { 
          console.log('Utilisateur ajouté !', response);
          alert('Utilisateur ajouté avec succès !');
          this.userForm.reset(); 
        },
   
        error: (err: any) => {
          console.error("Erreur lors de l'ajout", err);
          alert("Erreur lors de l'ajout de l'utilisateur.");
        }
      });
    } else {
      alert("Le formulaire n'est pas valide.");
    }
  }
}