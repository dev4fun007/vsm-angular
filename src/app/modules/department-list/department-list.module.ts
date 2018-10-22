import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { DepartmentListComponent } from './department-list.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        SharedModule,
        FormsModule
    ],
    declarations: [
        DepartmentListComponent
    ],
    providers: []
})


export class DepartmentListModule {}