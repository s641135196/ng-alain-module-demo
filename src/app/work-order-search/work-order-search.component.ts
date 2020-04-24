import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { ReuseTabService } from '@delon/abc';

@Component({
  selector: 'app-item',
  templateUrl: './work-order-search.component.html'
})
export class WorkOrderSearchComponent implements OnInit {

  id: string;

  constructor(public route: ActivatedRoute, private router:Router, private reuseTabService: ReuseTabService,) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
  }

  newSearch() {
       let random = this.generateMixed(8); //生成随机数
       this.reuseTabService.replace(`/work-order-search/${random}`);
  }


 chars = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  generateMixed(n) {
    var res = "";
    for(var i = 0; i < n ; i ++) {
      var id = Math.ceil(Math.random()*35);
      res += this.chars[id];
    }
    return res;
 }

}
