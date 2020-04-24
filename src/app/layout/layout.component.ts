import {
  Component,
  AfterViewInit
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
})
export class layoutComponent implements AfterViewInit {
  constructor(private router:Router){

  }
  ngAfterViewInit(): void {
   // this.router.navigate(['/work-order/custom-info']);
}
}
