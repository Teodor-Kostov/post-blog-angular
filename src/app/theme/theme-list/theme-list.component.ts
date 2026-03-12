import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../api.service';
import { Theme } from '../../types';
import { LoaderComponent } from '../../shared/loader/loader.component';

@Component({
  selector: 'app-theme-list',
  standalone: true,
  imports: [CommonModule, LoaderComponent],
  templateUrl: './theme-list.component.html',
  styleUrls: ['./theme-list.component.css']
})
export class ThemeListComponent implements OnInit {
  themes: Theme[] = [];
  isLoading = true;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.themeApi.getThemes().subscribe({
      next: (data) => {
        this.themes = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching themes:', err);
        this.isLoading = false;
      }
    });
  }
}
