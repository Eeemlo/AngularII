import { Component } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import { CommonModule } from '@angular/common';
import { Course } from '../models/course';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-courses-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './courses-table.component.html',
  styleUrl: './courses-table.component.css'
})
export class CoursesTableComponent {
courses: Course[] = [];
sortedCourses: Course[] = [];
ascendingOrder: boolean = true;
columnToSort: string = "";
searchField: string = "";

constructor(private coursesService : CoursesService) {}

ngOnInit() {
  this.coursesService.getCourses().subscribe((data) => {
    this.courses = data;
    this.sortedCourses = [...this.courses];
  });
}

sortColumn(column: string) {
  if (column === this.columnToSort) {
    this.ascendingOrder = !this.ascendingOrder;
  } else {
    this.ascendingOrder = true;
  }

  this.columnToSort = column;
  this.sortedCourses.sort((a, b) => {
    const valueA = a[column].toLowerCase();
    const valueB = b[column].toLowerCase();

    if (valueA < valueB) {
      return this.ascendingOrder ? -1 : 1; 
    } else {
      return this.ascendingOrder ? 1 : -1;
    } 
  });
}

searchCourses() {
  this.sortedCourses = this.courses.filter(course => {
    return course.code.toLowerCase().includes(this.searchField.toLowerCase()) ||
    course.coursename.toLowerCase().includes(this.searchField.toLowerCase()) ||
    course.progression.toLowerCase().includes(this.searchField.toLowerCase())
  });
}

}
