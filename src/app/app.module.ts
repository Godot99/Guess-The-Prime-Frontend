import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TileComponent } from './tile/tile/tile.component';
import { GridComponent } from './grid/grid/grid.component';
import { PlayerComponent } from './player/player/player.component';

@NgModule({
  declarations: [
    AppComponent,
    TileComponent,
    GridComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
