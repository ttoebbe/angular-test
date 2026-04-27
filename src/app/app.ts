import { CurrencyPipe, JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';


// kebab-case.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'truncate' })
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit: number=15): string {
    return value.length < limit ? value : value.substring(0, limit) + '...';
  }
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, CurrencyPipe, JsonPipe, TruncatePipe],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  myVar = 'hello_world';
  price = 501.95;
  data = {hallo: "welt", zahl: 42};
  textvar = "Das ist ein sehr langer Text, der gekürzt werden soll.";
  // protected readonly title = signal('angular-test');
}
