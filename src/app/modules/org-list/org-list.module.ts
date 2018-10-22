import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { OrgListComponent } from './org-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        SharedModule
    ],
    declarations: [
        OrgListComponent
    ],
    providers: []
})

export class OrgListModule {}