import { Component, OnInit } from '@angular/core';
import { OrgsService } from '../../services/orgs.service';

@Component({
  selector: 'app-org-list',
  templateUrl: './org-list.component.html',
  styleUrls: ['./org-list.component.css']
})
export class OrgListComponent implements OnInit {

  orgs;
  isCreate = false;
  orgName;
  scope;
  constructor(private orgsService: OrgsService) { }

  ngOnInit() {
    this.orgsService.getOrgs().subscribe(data => {this.orgs = data});
  }

  openCreate() {
    this.isCreate = true;
  }

  onSave() {
    this.clearCreate(); 
  }

  onCancel() {
    this.clearCreate();
  }

  clearCreate() {
    this.isCreate = false;
    this.orgName = '';
    this.scope = '';
  }
}
