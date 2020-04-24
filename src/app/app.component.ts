import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template:`<router-outlet></router-outlet>`
})
export class AppComponent implements AfterViewInit {
  title = 'app-router';
    constructor(
    private router: Router,
     ) {}
    ngAfterViewInit(): void {
       this.router.navigate(['/work-order/custom-info']);
  }
}
