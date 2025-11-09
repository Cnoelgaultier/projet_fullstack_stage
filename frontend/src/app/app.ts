

import { Component } from '@angular/core';


import { UserList } from './user-list/user-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserList],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class AppComponent {
  title = 'frontend';
}