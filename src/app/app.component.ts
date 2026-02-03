import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreatePostComponent } from './create-post/create-post.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CreatePostComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'post-blog';
}
