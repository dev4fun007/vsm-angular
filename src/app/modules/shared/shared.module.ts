import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/core';
import { TileListComponent } from './components/tile-list/tile-list.component';
import { TileComponent } from './components/tile/tile.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { MatSnackBar, MatSnackBarModule } from '@angular/material';
import { TileDataPipe } from './pipes/tile-data.pipe';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MatSnackBarModule
    ],
    declarations: [
        TileListComponent,
        TileComponent,
        HeaderComponent,
        TileDataPipe
    ],
    exports: [
        TileListComponent,
        TileComponent,
        HeaderComponent
    ],
    providers: []
})

export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: []
        }
    }
}