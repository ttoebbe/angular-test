import { Component, signal } from '@angular/core';
import { RouterLink,RouterOutlet } from '@angular/router';
import { Header } from './header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular-test');
}
