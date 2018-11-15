import { Component, OnInit } from '@angular/core';
import { OrgsService } from '../../services/orgs.service';
import { MatSnackBarConfig, MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-org-list',
  templateUrl: './org-list.component.html',
  styleUrls: ['./org-list.component.css']
})
export class OrgListComponent implements OnInit {

  title = 'Orgs';
  orgs;
  isCreate = false;
  orgName;
  scope;
  constructor(private orgsService: OrgsService,private router: Router ,private snackBar: MatSnackBar) { }

  ngOnInit() {
    let callback = this.navigateToDepartmentPage.bind(this);
    this.orgsService.getOrgs().subscribe(data => {
      this.orgs = data;
      this.orgs.callback = callback;
    });
  }

  openCreate() {
    this.isCreate = true;
  }

  onSave() {
    if (this.orgName && this.scope) {
    const payload = {
      'orgName': this.orgName,
      'scope': this.scope
    };
    this.orgsService.addOrg(payload).subscribe(
      data => {
        this.clearCreate();
        this.openSnackBar('Organization added successfully!!');
      }
    ); 
    }
    else {
      this.openSnackBar('Please add both the fields');
    }
  }

  onCancel() {
    this.clearCreate();
  }

  clearCreate() {
    this.isCreate = false;
    this.orgName = '';
    this.scope = '';
  }

  openSnackBar(msg) {
    // const config = new MatSnackBarConfig();
    // config.verticalPosition = 'bottom';
    // config.duration = 2000;
    // config.extraClasses = ['messageToast'];
    this.snackBar.open(msg, null, {
      duration: 2000
    });
  }

  navigateToDepartmentPage(data) {
    this.router.navigateByUrl('/department?org=' + data.orgName + '&scope=' + data.scope);
  }
}
