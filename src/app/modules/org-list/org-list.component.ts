import { Component, OnInit } from '@angular/core';
import { OrgsService } from '../../services/orgs.service';

@Component({
  selector: 'app-org-list',
  templateUrl: './org-list.component.html',
  styleUrls: ['./org-list.component.css']
})
export class OrgListComponent implements OnInit {

  orgs;
  constructor(private orgsService: OrgsService) { }

  ngOnInit() {
    this.orgsService.getOrgs().subscribe(data => {this.orgs = data});
  }

}

export class Org {
  orgName: string;
  scope: string;
}
