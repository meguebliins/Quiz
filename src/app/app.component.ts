import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CParentComponent } from './core/c-parent/c-parent.component';

@Component({
  selector: 'qz-root',
  standalone: true,
  imports: [RouterOutlet,CParentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Quiz';
}
