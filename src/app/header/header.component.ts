import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  host: { style: 'display: block; width: 100%;' }
})
export class HeaderComponent {
  constructor(private userService: UserService, private router : Router){}

  get isLoggedIn(): boolean{
    return this.userService.isLogged;
  }
  get firstName(): string {
    return this.userService.user?.firstName || '';
  }

  logOut(): void {
    this.userService.logout();
    this.router.navigate(['/home']);
  }


  

  

}
