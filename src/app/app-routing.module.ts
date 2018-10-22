import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrgListComponent } from './modules/org-list/org-list.component';


const routes: Routes = [
  {
    path: '', component: OrgListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
