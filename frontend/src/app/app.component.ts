import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StatusCardComponent } from './features/status/status-card.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, StatusCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend';
}
