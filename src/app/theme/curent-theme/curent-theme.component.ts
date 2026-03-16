import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../api.service';
import { Theme } from '../../types';
import { LoaderComponent } from '../../shared/loader/loader.component';

@Component({
  selector: 'app-curent-theme',
  standalone: true,
  imports: [LoaderComponent],
  templateUrl: './curent-theme.component.html',
  styleUrls: ['./curent-theme.component.css']
})
export class CurentThemeComponent implements OnInit {
  theme: Theme | null = null;
  isLoading = true;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const themeId = params['themeId'];

      this.apiService.themeApi.getTheme(themeId).subscribe({
        next: (data) => {
          this.theme = data;
          this.isLoading = false;
        },
        error: (err) => {
          console.error('Error fetching theme:', err);
          this.isLoading = false;
        }
      });
    });
  }
}
