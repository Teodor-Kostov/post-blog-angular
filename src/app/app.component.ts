import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreatePostComponent } from './create-post/create-post.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CreatePostComponent,MainComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'post-blog';
}
