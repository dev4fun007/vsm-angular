import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { DepartmentListComponent } from './department-list.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { DepartmentListRoutingModule } from './department-list-routing.module';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        SharedModule,
        FormsModule,
        DepartmentListRoutingModule
    ],
    declarations: [
        DepartmentListComponent
    ],
    providers: []
})


export class DepartmentListModule {}