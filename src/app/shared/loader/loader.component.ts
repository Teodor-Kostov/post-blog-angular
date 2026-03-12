import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loader',
  imports: [],
  standalone: true,
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {
  @Input() isLoading = true;
}
