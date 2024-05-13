import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <ol>
      <li>Harry Potter</li>
      <li>Inception</li>
      <li>Interstellar</li>
    </ol>
  `,
  styles: `
  ol{
    list-style-type: upper-roman
  }`,
})
export class AppComponent {}
