import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../api.service';
import { Theme } from '../../types';

@Component({
  selector: 'app-curent-theme',
  imports: [],
  templateUrl: './curent-theme.component.html',
  styleUrls: ['./curent-theme.component.css']
})
export class CurentThemeComponent implements OnInit {
  theme: Theme | null = null;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const themeId = params['themeId'];

      this.apiService.themeApi.getTheme(themeId).subscribe({
        next: (data) => {
          this.theme = data;
          console.log(this.theme);
        },
        error: (err) => {
          console.error('Error fetching theme:', err);
        }
      });
    });
  }
}
