import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {

  @Input() data;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToDepartmentPage(data) {
    this.router.navigateByUrl('/department?org=' + data.orgName + '&scope=' + data.scope);
  }

}
