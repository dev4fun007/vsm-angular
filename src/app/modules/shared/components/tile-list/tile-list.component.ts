import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tile-list',
  templateUrl: './tile-list.component.html',
  styleUrls: ['./tile-list.component.css']
})
export class TileListComponent implements OnInit {

  constructor() { }

  @Input() list;
  ngOnInit() {
  }

}
