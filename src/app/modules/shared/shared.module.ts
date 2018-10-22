import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/core';
import { TileListComponent } from './components/tile-list/tile-list.component';
import { TileComponent } from './components/tile/tile.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        TileListComponent,
        TileComponent,
        HeaderComponent
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