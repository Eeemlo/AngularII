import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoursesTableComponent } from './courses-table/courses-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CoursesTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularII';
}
