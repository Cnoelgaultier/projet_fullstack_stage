import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { UserForm } from '../user-form/user-form';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  standalone: true, 
  imports: [CommonModule, UserForm], // <- Ajout du formaulaire 
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})



export class UserList implements OnInit {

  users: any[] = [
    { id: 1, name: 'Dupont', email: 'alice.test@email.com', role: 'Admin' },
    { id: 2, name: 'Martin', email: 'bob.test@email.com', role: 'User' },
  ];
  public showAddForm: boolean = false;
 
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    
    this.userService.getUsers().subscribe( (data: any) => {
      
      this.users = data;
    });

    
    
  }
  toggleAddForm(): void {
  
  this.showAddForm = !this.showAddForm; 
}

  
  addUser(): void {
    this.showAddForm = !this.showAddForm;
   
  }
delUser(): void {
    console.log("Le bouton 'Supprimer un utilisateur' a été cliqué !");
   
  }
} 