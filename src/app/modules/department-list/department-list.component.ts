import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from 'src/app/services/departments.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  title = 'Departments';
  department;
  orgName;
  scope;

  constructor(private deptService:DepartmentsService, private route:ActivatedRoute) { }

  ngOnInit() {
    
    this.route.queryParams.subscribe(params => {
          this.orgName = params.orgName;
          this.scope = params.scope;
    });

    this.deptService.getOrgsDepartment(this.orgName, this.scope).subscribe(data => {this.department = data});

  }

}
