import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/core';
import { TileListComponent } from './components/tile-list/tile-list.component';
import { TileComponent } from './components/tile/tile.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        TileListComponent,
        TileComponent
    ],
    exports: [
        TileListComponent,
        TileComponent
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