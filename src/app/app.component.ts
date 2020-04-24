import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements AfterViewInit {
  title = 'app-router';
    constructor(
    private router: Router,
     ) {}
    ngAfterViewInit(): void {
       this.router.navigate(['/workorder/custom-info']);
  }
}
