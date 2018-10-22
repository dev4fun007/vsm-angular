import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrgListComponent } from './modules/org-list/org-list.component';
import { DepartmentListComponent } from './modules/department-list/department-list.component';


const routes: Routes = [
  {
    path: '', component: OrgListComponent,    
  },
  {
    path: 'department', component: DepartmentListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
