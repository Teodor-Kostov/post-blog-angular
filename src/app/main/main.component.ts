import { Component } from '@angular/core';
import { PostsListComponent } from '../post/posts-list/posts-list.component'; 
import { ThemeListComponent } from '../theme/theme-list/theme-list.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [PostsListComponent, ThemeListComponent ],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  host: { style: 'display: block; width: 100%;' }
})
export class MainComponent {

}
