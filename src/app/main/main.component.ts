import { Component } from '@angular/core';
import { PostsListComponent } from '../post/posts-list/posts-list.component'; 
import { ThemeListComponent } from '../theme/theme-list/theme-list.component';
import { WelcomeMessageComponent } from '../shared/welcome-message/welcome-message.component';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [PostsListComponent, ThemeListComponent, WelcomeMessageComponent ],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  host: { style: 'display: block; width: 100%;' }
})
export class MainComponent {

  get isLoggedIn(){
    return this.userService.isLogged;
  }

  constructor(private userService: UserService){}

}
