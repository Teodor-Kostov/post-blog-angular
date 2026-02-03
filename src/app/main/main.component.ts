import { Component } from '@angular/core';
import { PostsListComponent } from '../posts-list/posts-list.component'; 
import { ThemeListComponent } from '../theme-list/theme-list.component';

@Component({
  selector: 'app-main',
  imports: [PostsListComponent, ThemeListComponent ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
