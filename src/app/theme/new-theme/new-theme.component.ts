import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-new-theme',
  standalone: true,
  imports: [FormsModule, FormsModule],
  templateUrl: './new-theme.component.html',
  styleUrls: ['./new-theme.component.css']
})
export class NewThemeComponent {
 

  constructor(private apiService: ApiService, private router: Router) {}


  addTheme(form: NgForm) {
        
    const themeName: string = form.controls['themeName']?.value;
    const postText: string = form.controls['postText']?.value;
    
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
