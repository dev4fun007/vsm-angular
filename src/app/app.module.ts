import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule }    from '@angular/forms';
import { OrgListModule } from './modules/org-list/org-list.module';
import { SharedModule } from './modules/shared/shared.module';
import { DepartmentListModule } from './modules/department-list/department-list.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    OrgListModule,
    SharedModule,
    DepartmentListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
