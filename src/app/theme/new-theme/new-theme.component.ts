import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-new-theme',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-theme.component.html',
  styleUrls: ['./new-theme.component.css']
})
export class NewThemeComponent {
 

  constructor(private apiService: ApiService, private router: Router) {}

  addTheme(themeName: string, postText:string, event: Event) {
    console.log({themeName, postText});
    
    /* if (themeName || themeName.length < 5 || postText || postText.length < 10) {
      return;
    }
 */
    this.apiService.themeApi.createTheme({
      themeName,
      postText
    }).subscribe({
      next: (theme) => {
        this.router.navigate(['/theme-list', theme._id]);
      },
      error: (err) => {
        console.error('Error creating theme:', err);
      }
    });
  }

  onCancel() {
    this.router.navigate(['/home']);
  }
}
